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
import { ItemDetailReportPopup } from "./itemDetail";

const initialState = {
  customerDetail: {},
};
const reducer = (state, action) => {
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

const InvoiceReport = () => {
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
      fetch(baseURRl + "GGetSFDCInvoice")
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
    let export_file_name = "InvoiceReport" + cur_timestamp;
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
          `GGetSFDCInvoiceDetailsByInvoiceNo//${args.rowData.InvoiceNo}`
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
          {/* // ) : ( */}
          <Row>
            <Col>
              <GridComponent
                locale="en-Us"
                id="InvoiceReport"
                key="InvoiceReport"
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
                    field="InvoiceNo"
                    headerText="Invoice No"
                    width="150"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CPCode"
                    headerText="CP Code"
                    width="130"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="TaxableValue"
                    headerText="Taxable Value"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="InvoiceDate"
                    headerText="Invoice Date"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="CustomerCode"
                    headerText="Customer Code"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="InvoiceStatus"
                    headerText="Invoice Status"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="RoundofValue"
                    headerText="Roundoff Value"
                    width="190"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="TotalNoofLineItems"
                    headerText="Total No. of Line Items"
                    width="220"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="TotalTax"
                    headerText="Total Tax"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="TotalAmount"
                    headerText="Total Amount"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="ShippingCharges"
                    headerText="Shipping Charges"
                    width="180"
                    textAlign="left"
                    allowFiltering={false}
                    allowEditing={false}
                  />
                  <ColumnDirective
                    field="Balanceamount"
                    headerText="Balance Amount"
                    width="170"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="AdjustmentStatus"
                    headerText="Adjustment Status"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="ShippingStreet"
                    headerText="Shipping Street"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="ShippingCity"
                    headerText="Shipping City"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="ShippingState"
                    headerText="Shipping State"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="ShippingCountry"
                    headerText="Shipping Country"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="ShippingPincode"
                    headerText="Shipping Pincode"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="BillingStreet"
                    headerText="Billing Street"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />{" "}
                  <ColumnDirective
                    field="BillingCity"
                    headerText="Billing City"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="BillingCountry"
                    headerText="Billing Country"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="BillingPostalCode"
                    headerText="Billing Postal Code"
                    width="200"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="ExternalId"
                    headerText="External Id"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="IRNNo"
                    headerText="IRN No"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="DistanceInKM"
                    headerText="Distance In KM"
                    width="180"
                    textAlign="left"
                    allowEditing={false}
                    allowFiltering={false}
                  />
                  <ColumnDirective
                    field="TransporterID"
                    headerText="Transporter ID"
                    width="180"
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
                    headerText="View Detail"
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
          {/* )} */}
          <ItemDetailReportPopup
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

export default InvoiceReport;

// {
//   "InvoiceNo": "SI-0000000427",
//   "CPCode": "1000002",
//   "TaxableValue": 44352.00,
//   "InvoiceDate": "2024-12-12T00:00:00",
//   "CustomerCode": "1234",
//   "InvoiceStatus": "Draft",
//   "RoundofValue": 34650.00,
//   "TotalNoofLineItems": 1,
//   "TotalTax": 9702.00,
//   "TotalAmount": 34650.00,
//   "ShippingCharges": 0.00,
//   "ShippingStreet": null,
//   "ShippingCity": null,
//   "ShippingState": null,
//   "ShippingCountry": null,
//   "ShippingPincode": null,
//   "BillingStreet": "test",
//   "BillingCity": "Thane",
//   "BillingState": "MH",
//   "BillingCountry": "India",
//   "BillingPostalCode": "400601",
//   "Balanceamount": 0.00,
//   "AdjustmentStatus": "",
//   "ExternalId": "SI-0000000427",
//   "IRNNo": "101010",
//   "DistanceInKM": "50",
//   "TransporterID": "987610",
//   "createdon": "2025-03-05T11:35:47.53",
//   "updatedon": "2025-03-05T11:35:47.547"
// }
