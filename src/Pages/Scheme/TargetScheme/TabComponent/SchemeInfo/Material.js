import React from "react";
import { Col, Row, Button } from "reactstrap";
import { ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-grids";
import {
  GridComponent,
  Filter,
  Inject,
  Sort,
  Page as gridpage,
  Edit,
} from "@syncfusion/ej2-react-grids";
// import { schemeSubGridPageLength } from "../../../components/Common/Constants";
import { FileUpload } from "../../../../../common";
import itemTemplate from "../../../../../assets/itemTemplate/Item.xlsx";
// "assets/templateFiles/Item.xlsx";
export const Material = (
  {
    //   handleOpenMaterialList,
    //   materialList,
    //   formEditable,
    //   materialGridInstance,
    //   handleMaterialFileSelection,
    //   uploadMaterial,
    //   materialUploaderInstance,
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
            id="materialGrid"
            key="materialGrid"
            enableHover={false}
            rowHeight={25}
            // ref={materialGridInstance}
            // dataSource={materialList}
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
          >
            <ColumnsDirective>
              <ColumnDirective
                field="productid"
                headerText="Product Id"
                allowEditing={false}
                width="0"
                isPrimaryKey={true}
                visible={false}
              />
              <ColumnDirective
                field="schemeGroupMasterId"
                headerText="Scheme Group Id"
                allowEditing={false}
                width="0"
                visible={false}
              />
              <ColumnDirective
                field="productcode"
                headerText="Material Code"
                allowEditing={false}
                width="130"
              />
              <ColumnDirective
                field="productdesc"
                headerText="Material Name"
                allowEditing={false}
                width="230"
              />
            </ColumnsDirective>
            <Inject services={[Filter, Sort, gridpage, Edit]} />
          </GridComponent>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          <Button
            style={{ background: "#16619f" }}
            size="sm"
            //   onClick={handleOpenMaterialList}
          >
            Select Material
          </Button>
        </Col>
        <Col xl={8} lg={8} md={6} sm={12} xs={12}>
          <FileUpload
            type="file"
            id="material_uploader"
            name="material_uploader"
            // onChange={handleMaterialFileSelection}
            // fileInputInstance={materialUploaderInstance}
            // disabled={!formEditable}
          />
          <Button
            style={{ background: "#16619f" }}
            size="sm"
            //   onClick={uploadMaterial}
          >
            Import Material
          </Button>
          <p>
            <a href={itemTemplate} target="_blank">
              Click Here
            </a>{" "}
            to download item template
          </p>
        </Col>
      </Row>
    </>
  );
};
