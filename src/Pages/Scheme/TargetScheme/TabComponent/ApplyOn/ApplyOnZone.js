import React from "react";
import { Col, Row } from "reactstrap";
import { ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-grids";
import {
  GridComponent,
  Filter,
  Inject,
  Sort,
  Page as gridpage,
} from "@syncfusion/ej2-react-grids";
// import { schemeSubGridPageLength } from '../../../components/Common/Constants';

export const ApplyOnZone = (
  {
    // handleChange,
    // zoneList,
    // formEditable,
    // zoneGridInstance
  }
) => {
  return (
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
          id="applyOnZoneGrid"
          key="applyOnZoneGrid"
          enableHover={false}
          rowHeight={25}
          // ref={zoneGridInstance}
          // dataSource={zoneList}
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
              field="zoneid"
              headerText="Zone Id"
              allowEditing={false}
              width="0"
              isPrimaryKey={true}
              visible={false}
            />
            <ColumnDirective
              width="50"
              textAlign="Center"
              headerTextAlign="Center"
              type="checkbox"
              field="IsSelected"
              allowFiltering={false}
            />
            <ColumnDirective
              field="zonecode"
              headerText="Zone Code"
              allowEditing={false}
              width="180"
            />
            <ColumnDirective
              field="zonename"
              headerText="Zone Name"
              allowEditing={false}
              width="200"
            />
          </ColumnsDirective>
          <Inject services={[Filter, Sort, gridpage]} />
        </GridComponent>
      </Col>
    </Row>
  );
};
