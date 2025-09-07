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

const CustomerAdressReport = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const instance = useRef();

  useEffect(() => {
    const getDataSource = async () => {
      setLoader(true);
      // const response = await axios_.get("GetItemMaster");
      fetch(baseURRl + "GetCustomerAddress")
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
    let export_file_name = "CustomerAddress" + cur_timestamp;
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
                  id="GetCustomerAddress"
                  key="GetCustomerAddress"
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
                      field="CustomerCode"
                      headerText="Customer Code"
                      isPrimaryKey={true}
                      width="180"
                      textAlign="left"
                      allowEditing={false}
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
                    {/* <ColumnDirective
                      field="GSTINApplicableDate"
                      headerText="GSTIN Applicable Date"
                      width="220"
                      textAlign="left"
                      allowEditing={false}
                    /> */}
                    {/* <ColumnDirective
                      field="GSTRegistrationType"
                      headerText="GST Registration Type"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                      allowFiltering={false}
                    /> */}
                    {/* <ColumnDirective
                      field="CustomerGSTIN"
                      headerText="Customer GSTIN"
                      width="180"
                      textAlign="left"
                      allowEditing={false}
                      visible={false}
                    /> */}
                    <ColumnDirective
                      field="ExternalID"
                      headerText="External ID"
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

export default CustomerAdressReport;

// {
//   "CustomerCode": "1003011_XYZ2324",
//   "Street": "14, Jakhama Road",
//   "City": "Kiphire",
//   "State": "Nagaland",
//   "Country": "India",
//   "PinCode": "797110",
//   "ExternalID": "SA-00017",
//   "CPCode": "1000002",
//   "createdon": "2025-03-03T15:06:38.61",
//   "updatedon": "2025-03-03T15:06:38.61"
// }
