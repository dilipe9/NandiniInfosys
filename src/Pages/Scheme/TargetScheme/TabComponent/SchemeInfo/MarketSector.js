import React from "react";
import { Col, Row, Button } from "reactstrap";
import { ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-grids";
import {
  GridComponent,
  Filter,
  Inject,
  Sort,
  Page as gridpage,
} from "@syncfusion/ej2-react-grids";
// import { schemeSubGridPageLength } from "../../../components/Common/Constants";

export const MarketSector = (
  {
    //   handleOpenMarketSector,
    //   marketSectorList,
    //   formEditable,
    //   marketSectorGridInstance,
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
            id="marketSectorGrid"
            key="marketSectorGrid"
            enableHover={false}
            rowHeight={25}
            // ref={marketSectorGridInstance}
            // dataSource={marketSectorList}
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
                field="marketsectorid"
                headerText="Market Sector Id"
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
                field="marketsectorcode"
                headerText="Market Sector Code"
                allowEditing={false}
                width="180"
              />
              <ColumnDirective
                field="marketsectorname"
                headerText="Market Sector Name"
                allowEditing={false}
                width="200"
              />
            </ColumnsDirective>
            <Inject services={[Filter, Sort, gridpage]} />
          </GridComponent>
        </Col>
      </Row>
      <Row className="pt-1">
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          <Button
            style={{ background: "#16619f" }}
            size="sm"
            //   onClick={handleOpenMarketSector}
          >
            Select Market Sector
          </Button>
        </Col>
      </Row>
    </>
  );
};
