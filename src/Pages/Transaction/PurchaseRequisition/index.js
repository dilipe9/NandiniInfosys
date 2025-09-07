import React from "react";
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
  Reorder,
  valueAccessor,
  Group,
  ColumnChooser,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Row, Col, Button } from "reactstrap";
import { PurchaseRequisitionForm } from "./purchaseRequisitionForm";

const PurchaseRequisition = () => {
  const commmandTemplate = [
    {
      type: "Edit",
      buttonOption: { cssClass: "e-flat", iconCss: "e-edit e-icons" },
    },
    {
      type: "Delete",
      buttonOption: { cssClass: "e-flat", iconCss: "e-delete e-icons" },
    },
  ];
  const toolbar = ["Search", "ColumnChooser", "ExcelExport", "CSV Export"];
  return (
    <>
      <div className="main_content_wrapper">
        <div className="main_content_padding">
          <PurchaseRequisitionForm />
          <GridComponent
            locale="en-Us"
            id={`${"BudgetPlaning"}_GridComponent_Id`}
            key={`${"BudgetPlaning"}_GridComponent_Id`}
            allowTextWrap={true}
            allowResizing={false}
            // dataSource={tableData}
            // ref={gridInstance}
            height={"400px"}
            // width={"100%"}
            allowPaging={true}
            allowSelection={true}
            gridLines="Both"
            rowHeight={25}
            pageSettings={{
              pageSizes: [10, 20, 30, 40, 50, 60, "All"],
              pageCount: 15,
            }}
            allowFiltering={true}
            filterSettings={{ type: "Excel" }}
            allowExcelExport={true}
            allowSorting={true}
            toolbar={toolbar}
            allowReordering={true}
            allowGrouping={true}
            showColumnChooser={true}
            // toolbarClick={handleCSVImport}
          >
            <ColumnsDirective>
              <ColumnDirective
                headerText="S No."
                width="130"
                field="srlno"
                textAlign="Left"
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Company Code"
                width="180"
                textAlign="left"
                allowEditing={false}
              />

              <ColumnDirective
                field="VCHTYPE"
                headerText="Group Type"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Group"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Ledger"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Department"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Reciving By Date"
                width="190"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Budget"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Quote"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Remarks"
                width="150"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Attachment 1"
                width="170"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Attachment 2"
                width="170"
                textAlign="left"
                allowEditing={false}
              />
              <ColumnDirective
                field="VCHTYPE"
                headerText="Attachment 3"
                width="170"
                textAlign="left"
                allowEditing={false}
              />

              <ColumnDirective
                headerText="Action"
                width="120"
                textAlign="center"
                commands={commmandTemplate}
              />
            </ColumnsDirective>

            <Inject
              services={[
                CommandColumn,
                Freeze,
                Page,
                Filter,
                Toolbar,
                ExcelExport,
                Sort,
                ForeignKey,
                Reorder,
                Group,
                ColumnChooser,
              ]}
            />
          </GridComponent>
          <Row style={{ marginTop: "10px" }}>
            <Col xl={2} lg={2} md={4} sm={12} xs={12}>
              <Button style={{ background: "green" }}>Submit</Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default PurchaseRequisition;
