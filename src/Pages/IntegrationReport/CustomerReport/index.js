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
import { AddressPopup } from "./AddressPopup";

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

const CustomerIntegrationReport = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [isOpen, setPopup] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const instance = useRef();
  const [customerDetails, setCustomerDetails] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const getDataSource = async () => {
      setLoader(true);
      fetch(baseURRl + "GetCustomermaster")
        .then((val) => val.json())
        .then((res) => {
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
    let export_file_name = "CustomerReport" + cur_timestamp;
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
    if (args.commandColumn.type === "View Adreess") {
      setLoader(true);
      fetch(
        baseURRl +
          `GetCustomerAddressByCustomerCode/${args.rowData.CustomerCode}`
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
      type: "View Adreess",
      buttonOption: { cssClass: "e-flat", iconCss: "fas fa-map-marker-alt" },
    },
  ];

  return (
    <>
      {" "}
      <div className="main_content_wrapper">
        <div className={"form_form__purchaseTransaction"}>
          {/* {isLoading ? ( */}
          <Loader show={isLoading} />
          {/* // ) : ( */}
          <Row>
            <Col>
              <GridComponent
                locale="en-Us"
                id="customerIntegrationReport"
                key="customerIntegrationReport"
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
                    field="CustomerCode"
                    headerText="Customer Code"
                    isPrimaryKey={true}
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CustomerFirstName"
                    headerText="Customer First Name"
                    width="220"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CustomerLastName"
                    headerText="Customer Last Name"
                    width="220"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CustomerEmail"
                    headerText="Customer Email"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CustomerPhone"
                    headerText="Customer Phone"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    visible={false}
                  />
                  <ColumnDirective
                    field="Country"
                    headerText="Country"
                    width="150"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="State"
                    headerText="State"
                    width="130"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="City"
                    headerText="City"
                    width="120"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Street"
                    headerText="Street"
                    width="150"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="PinCode"
                    headerText="PinCode"
                    width="130"
                    textAlign="left"
                    allowEditing={false}
                  />

                  <ColumnDirective
                    field="PANNo"
                    headerText="PAN No"
                    width="130"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="BankName"
                    headerText="Bank Name"
                    width="160"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="AccountNo"
                    headerText="Account No"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="IFSCCode"
                    headerText="IFSC Code"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="BranchAddress"
                    headerText="Branch Address"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="GSTIN"
                    headerText="GST IN"
                    width="170"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CPCode"
                    headerText="CP Code"
                    width="170"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="ExternalId"
                    headerText="External Id"
                    width="170"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="ApplicationDate"
                    headerText="Application Date"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="RegistrationType"
                    headerText="Registration Type"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
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
          {/* // )} */}
          <AddressPopup
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

export default CustomerIntegrationReport;
