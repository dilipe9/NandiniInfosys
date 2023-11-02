import React from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import {
  ColumnDirective,
  ColumnsDirective,
  selectVirtualRow,
} from "@syncfusion/ej2-react-grids";
import {
  GridComponent,
  Filter,
  Inject,
  Sort,
  Page as gridpage,
} from "@syncfusion/ej2-react-grids";
// import { schemeSubGridPageLength } from "../../../components/Common/Constants";
import { FileUpload } from "../../../../../common";

// import customerTemplate from "assets/templateFiles/Customer.xlsx";

export const ApplyOnExcludeDealer = (
  {
    //   excludeDealerList,
    //   formEditable,
    //   excludeDealerGridInstance,
    //   handleExcludeDealerFileSelection,
    //   uploadExcludeDealer,
    //   excludeDealerUploaderInstance,
  }
) => {
  return (
    <>
      <Row className="pt0">
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="reportContainer w-100"
        >
          <GridComponent
            id="applyOnExcludeDealerGrid"
            key="applyOnExcludeDealerGrid"
            enableHover={false}
            rowHeight={25}
            // ref={excludeDealerGridInstance}
            // dataSource={excludeDealerList}
            // allowFiltering={formEditable}
            filterSettings={{ type: "Excel" }}
            allowTextWrap={true}
            allowResizeToFit={true}
            allowSorting={true}
            SelectionMode="Row"
            // allowSelection={formEditable}
            allowPaging={true}
            // pageSettings={{ pageSize: schemeSubGridPageLength }}
            gridLines="Both"
            selectionSettings={{
              checkboxOnly: true,
              mode: "Row",
              enableSimpleMultiRowSelection: false,
              persistSelection: true,
              type: "Multiple",
            }}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="customerid"
                headerText="Customer Id"
                allowEditing={false}
                width="0"
                isPrimaryKey={true}
                visible={false}
              />
              <ColumnDirective
                field="IsSelected"
                width="50"
                textAlign="Center"
                headerTextAlign="Center"
                type="checkbox"
                allowFiltering={false}
              />
              <ColumnDirective
                field="customercode"
                headerText="Dealer Code"
                allowEditing={false}
                width="180"
              />
              <ColumnDirective
                field="customername"
                headerText="Dealer Name"
                allowEditing={false}
                width="200"
              />
            </ColumnsDirective>
            <Inject services={[Filter, Sort, gridpage]} />
          </GridComponent>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col xl={8} lg={8} md={6} sm={12} xs={12}>
          <FileUpload
            type="file"
            id="applyonexcludedealer_uploader"
            name="applyonexcludedealer_uploader"
            // onChange={handleExcludeDealerFileSelection}
            // fileInputInstance={excludeDealerUploaderInstance}
            // disabled={!formEditable}
          />
          <Button
            //   color="primary"
            style={{ background: "#16619f" }}
            size="sm"
            //   onClick={uploadExcludeDealer}
          >
            Import Exclude Dealer
          </Button>
          <p>
            <a
              // href={customerTemplate}
              target="_blank"
            >
              Click Here
            </a>{" "}
            to download exclude dealer template
          </p>
        </Col>
      </Row>
    </>
  );
};
