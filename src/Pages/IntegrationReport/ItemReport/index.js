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

const ItemIntegrationReport = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const instance = useRef();

  useEffect(() => {
    const getDataSource = async () => {
      setLoader(true);
      // const response = await axios_.get("GetItemMaster");
      fetch(baseURRl + "GetItemMaster")
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
    let export_file_name = "itemReport" + cur_timestamp;
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
                      field="MaterialCode"
                      headerText="Material Code"
                      isPrimaryKey={true}
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="MaterialDescription"
                      headerText="Material Description"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="CPCode"
                      headerText="CP Code"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="ExternalID"
                      headerText="External ID"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="WarehouseID"
                      headerText="Warehouse ID"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                      visible={false}
                    />
                    <ColumnDirective
                      field="MaterialGroup"
                      headerText="Material Group"
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="HSNCode"
                      headerText="HSN Code"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="IsActive"
                      headerText="Is Active"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="Discontinued"
                      headerText="Discontinued"
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="UOM"
                      headerText="UOM"
                      width="130"
                      textAlign="left"
                      allowEditing={false}
                    />

                    <ColumnDirective
                      field="GST_Percent"
                      headerText="GST %"
                      width="130"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="PackSize"
                      headerText="Pack Size"
                      width="160"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="HSNApplicableDate"
                      headerText="HSN Applicable Date"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="GSTApplicableDate"
                      headerText="GST Applicable Date"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="ListPrice"
                      headerText="List Price"
                      width="150"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="SaleableQty"
                      headerText="Saleable Qty"
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />
                    <ColumnDirective
                      field="DamagedQty"
                      headerText="Damaged Qty"
                      width="170"
                      textAlign="left"
                      allowEditing={false}
                    />

                    <ColumnDirective
                      field="mrpapplicabledate"
                      headerText="MRP Applicable Date"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                      allowFiltering={false}
                    />
                    <ColumnDirective
                      field="uploadedon"
                      headerText="Uploaded On"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                      allowFiltering={false}
                    />
                    <ColumnDirective
                      field="updatedon"
                      headerText="Updated on"
                      width="200"
                      textAlign="left"
                      allowEditing={false}
                      allowFiltering={false}
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

export default ItemIntegrationReport;
