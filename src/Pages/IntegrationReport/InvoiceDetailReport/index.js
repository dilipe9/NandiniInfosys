import React, { useState, useEffect, useRef } from "react";
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

const InvoiceDetailReport = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const instance = useRef();

  useEffect(() => {
    const getDataSource = async () => {
      setLoader(true);
      // const response = await axios_.get("GetItemMaster");
      fetch(baseURRl + "GGetSFDCInvoiceDetails")
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
    let export_file_name = "InvoiceDetailReport" + cur_timestamp;
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

  return (
    <>
      <div className="main_content_wrapper">
        <div className={"form_form__purchaseTransaction"}>
          {isLoading ? (
            <Loader show={true} />
          ) : (
            <Row>
              <Col>
                <GridComponent
                  locale="en-Us"
                  id="InvoiceDetailReport"
                  key="InvoiceDetailReport"
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
                      field="MaterialCode"
                      headerText="Material Code"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="SellingPrice"
                      headerText="Selling Price"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="Qty"
                      headerText="Quantity"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="TotalPrice"
                      headerText="Total Price"
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="Discount"
                      headerText="Discount"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="ExternalId"
                      headerText="External ID"
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="TaxAmount"
                      headerText="Tax Amount"
                      width="180"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="TotalAmount"
                      headerText="Total Amount"
                      width="190"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="LineItemNo"
                      headerText="Line Item No"
                      width="190"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="Warehouse"
                      headerText="Warehouse"
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="IGSTPercent"
                      headerText="IGST Percent"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="SGSTPercent"
                      headerText="SGST Percent"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="CGSTPercent"
                      headerText="CGST Percent"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="IGSTAmount"
                      headerText="IGST Amount"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="SGSTAmount"
                      headerText="SGST Amount"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="CGSTAmount"
                      headerText="CGST Amount"
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
          )}
        </div>
      </div>
    </>
  );
};

export default InvoiceDetailReport;

// {
//   "InvoiceNo": "SI-0000000412",
//   "MaterialCode": "OTCESP001",
//   "SellingPrice": 44352.00,
//   "Qty": 1,
//   "TotalPrice": 350.00,
//   "Discount": 1.00,
//   "ExternalId": "SecINVLI - 0000000483",
//   "TaxAmount": 9702.00,
//   "TotalAmount": 44352.00,
//   "LineItemNo": "SecINVLI - 0000000483",
//   "Warehouse": "1003547WH1",
//   "IGSTPercent": 0.00,
//   "SGSTPercent": 0.00,
//   "CGSTPercent": 0.00,
//   "IGSTAmount": 0.00,
//   "SGSTAmount": 4851.00,
//   "CGSTAmount": 4851.00,
//   "createdon": "2025-03-05T11:36:17.137",
//   "updatedon": "2025-03-05T11:36:17.15"
// }
