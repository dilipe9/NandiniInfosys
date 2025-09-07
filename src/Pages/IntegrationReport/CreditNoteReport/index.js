import React, { useState, useEffect, useRef, useReducer } from "react";
import { DataManager, Query } from "@syncfusion/ej2-data";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Edit,
  CommandColumn,
  Freeze,
  Page,
  Filter,
  Toolbar,
  ExcelExport,
  AggregateColumnDirective,
  Sort,
  ForeignKey,
  ColumnChooser,
  Group,
} from "@syncfusion/ej2-react-grids";
import { DetailRow, Inject } from "@syncfusion/ej2-react-grids";
import { Col, Row } from "reactstrap";
import { axios_, baseURRl } from "../../../utilities/utll";
import { Loader } from "../../../common/Loader";
import { CreditNoteDetailPopup } from "./CreditNote";

export const initialState = {
  customerDetail: {},
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "updateCustomer":
      return {
        ...state,
        customerDetail: {
          ...state.customerDetail,
          ...action.value,
        },
      };
    case "RESET":
      return initialState; // Reset to initial state
    default:
      throw new Error("Unknown action type");
  }
};

const CreditNoteReport = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const instance = useRef();
  const [customerDetails, setCustomerDetails] = useReducer(
    reducer,
    initialState
  );
  const [isOpen, setPopup] = useState(false);
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    const getDataSource = async () => {
      setLoader(true);
      // const response = await axios_.get("GetItemMaster");
      fetch(baseURRl + "GetSFDCCreditNote")
        .then((val) => val.json())
        .then((res) => {
          // console.log(res);
          if (res.Data.length > 0) {
            setDataSource(res.Data);
          }
          setLoader(false);
        })
        .catch((val) =>
          console.error("error while fetching integrated report item")
        );
    };
    getDataSource();
  }, []);

  const handleToolbarClick = (args) => {
    let cur_timestamp = Math.floor(Date.now() / 1000);
    let export_file_name = "CreditNoteReport" + cur_timestamp;
    if (args.item.text === "Excel Export") {
      instance.current.excelExport({
        fileName: export_file_name + ".xlsx",
      });
      // TeamActivityGridInstance.hideColumns('S. No.', 'headerText');
    } else if (args.item.text === "CSV Export") {
      instance.current.csvExport({
        fileName: export_file_name + ".csv",
      });
    }
  };

  const handleRowBound = (args) => {
    let rowIndex = parseInt(args.row.getAttribute("aria-rowIndex"));
    args.row.cells[0].innerText = rowIndex;
  };

  const viewCustomerDetail = (args) => {
    // console.log(args);
    if (args.commandColumn.type === "View Detail") {
      setLoader(true);
      fetch(
        baseURRl +
          `GetSFDCCreditNoteDetailsByDocumentNo/${args.rowData.DocumentNo}`
      )
        .then((val) => val.json())
        .then((res) => {
          if (res.Status) {
            setAddressList(res.Data);
          }
          setLoader(false);
        })
        .catch((val) =>
          console.error("error while fetching integrated report item")
        );

      setCustomerDetails({ type: "updateCustomer", value: args.rowData });
      setPopup(true);
    }
  };

  const userCommands = [
    {
      type: "View Detail",
      buttonOption: { cssClass: "e-flat", iconCss: "fas fa-eye" },
    },
  ];

  return (
    <>
      <div className="main_content_wrapper">
        <div className={"form_form__purchaseTransaction"}>
          {/* {isLoading ? ( */}
          <Loader show={isLoading} />
          {/* ) : ( */}
          <Row>
            <Col>
              <GridComponent
                locale="en-Us"
                id="CreditNoteReport"
                key="CreditNoteReport"
                allowTextWrap={true}
                allowResizing={false}
                dataSource={dataSource}
                height={"400px"}
                ref={instance}
                allowPaging={true}
                allowSelection={true}
                gridLines="Both"
                rowHeight={25}
                allowFiltering={true}
                filterSettings={{ type: "Excel" }}
                allowExcelExport={true}
                allowSorting={true}
                showColumnChooser={true}
                allowGrouping={true}
                toolbar={["ExcelExport", "Search"]}
                pageSettings={{
                  pageSizes: [10, 20, 30, 40, 50, 60, "All"],
                  pageCount: 15,
                }}
                toolbarClick={handleToolbarClick}
                rowDataBound={handleRowBound}
                commandClick={viewCustomerDetail}
              >
                <ColumnsDirective>
                  <ColumnDirective
                    field="serialNo"
                    headerText="S No"
                    allowEditing={false}
                    width="90"
                    allowFiltering={false}
                    // freeze="Left"
                  />

                  <ColumnDirective
                    field="DocumentNo"
                    headerText="Document No"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Amount"
                    headerText="Amount"
                    width="150"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="CNReason"
                    headerText="CN Reason"
                    width="170"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="CustomerCode"
                    headerText="Customer Code"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="VendorDebitNoteNo"
                    headerText="Vendor Debit Note No"
                    width="220"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="VendorDebitNoteDate"
                    headerText="Vendor Debit Note Date"
                    width="220"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="DocumentDate"
                    headerText="Document Date"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="BalanceAmount"
                    headerText="Balance Amount"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="AdjustmentStatus"
                    headerText="Adjustment Status"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="CPCode"
                    headerText="CP Code"
                    width="130"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="SalesReturnValue"
                    headerText="Sales Return Value"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="createdon"
                    headerText="Created On"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="updatedon"
                    headerText="Updated On"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    headerText="View Adresss"
                    commands={userCommands}
                    width={"150"}
                    textAlign="center"
                  />
                </ColumnsDirective>
                <Inject
                  services={[
                    DetailRow,
                    CommandColumn,
                    Freeze,
                    Page,
                    Filter,
                    Toolbar,
                    ExcelExport,
                    Sort,
                    ForeignKey,
                    ColumnChooser,
                    Group,
                  ]}
                />
              </GridComponent>
            </Col>
          </Row>
          <CreditNoteDetailPopup
            customerDetails={customerDetails}
            isOpen={isOpen}
            toggle={() => setPopup(false)}
            addressList={addressList}
            handleRowBound={handleRowBound}
          />
        </div>
      </div>
    </>
  );
};

export default CreditNoteReport;
