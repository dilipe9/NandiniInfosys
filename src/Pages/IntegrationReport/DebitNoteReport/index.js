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

const DebitNoteReport = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const instance = useRef();

  useEffect(() => {
    const getDataSource = async () => {
      setLoader(true);
      // const response = await axios_.get("GetItemMaster");
      fetch(baseURRl + "GetSFDCDebitNote")
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
    let export_file_name = "DebitNoteReport" + cur_timestamp;
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
                  id="integration_report"
                  key="integration_report"
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
                      field="DocumentNo"
                      headerText="Document No"
                      isPrimaryKey={true}
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="DocumentDate"
                      headerText="Document Date"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="Amount"
                      headerText="Amount"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="DNReason"
                      headerText="DN Reason"
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="CPCode"
                      headerText="CP Code"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                      visible={false}
                    />
                    <ColumnDirective
                      field="VendorCreditNoteNo"
                      headerText="Vendor Credit Note No"
                      width="220"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="BalanceAmount"
                      headerText="Balance Amount"
                      width="180"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="AdjustmentStatus"
                      headerText="Adjustment Status"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="CustomerCode"
                      headerText="Customer Code"
                      width="190"
                      textAlign="left"
                      allowEditing={false}
                      visible={true}
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

export default DebitNoteReport;

// {
//   "DocumentNo": "DN-0012",
//   "DocumentDate": "2024-11-28T00:00:00",
//   "Amount": 1000.00,
//   "DNReason": "Cr. Sales Account",
//   "CPCode": "1000002",
//   "VendorCreditNoteNo": "",
//   "BalanceAmount": 0.00,
//   "AdjustmentStatus": "Cancelled",
//   "CustomerCode": "1003011_XYZ2324",
//   "createdon": "2025-03-03T15:13:42.1",
//   "updatedon": "2025-03-03T15:13:42.11"
// }
