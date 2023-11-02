import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-grids";
import {
  GridComponent,
  Filter,
  Inject,
  Sort,
  Page as gridpage,
  Edit,
  CommandColumn,
} from "@syncfusion/ej2-react-grids";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import { ApplyOnDealer } from "./ApplyOnDealer";
import { ApplyOnZone } from "./ApplyOnZone";
import { ApplyOnDepot } from "./ApplyOnDepot";
import { ApplyOnExcludeDealer } from "./ApplyOnExcludeDealer";

export const ApplyOn = () => {
  const [headerText, setHeaderText] = useState([
    { text: "Dealer" },
    { text: "Zone" },
    { text: "Depot" },
    { text: "Exclude Dealer" },
  ]);
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      <Row className="pt0">
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ marginLeft: "10px", marginBottom: "0px" }}
        >
          <TabComponent selected={(args) => setSelectedTab(args.selectedIndex)}>
            <TabItemsDirective>
              <TabItemDirective header={headerText[0]} />
              <TabItemDirective header={headerText[1]} />
              <TabItemDirective header={headerText[2]} />
              <TabItemDirective header={headerText[3]} />
            </TabItemsDirective>
          </TabComponent>
        </Col>
        <div className="tabContainer_targetSChemechild">
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ display: selectedTab === 0 ? "block" : "none" }}
          >
            <ApplyOnDealer />
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ display: selectedTab === 1 ? "block" : "none" }}
          >
            <ApplyOnZone />
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ display: selectedTab === 2 ? "block" : "none" }}
          >
            <ApplyOnDepot />
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ display: selectedTab === 3 ? "block" : "none" }}
          >
            <ApplyOnExcludeDealer />
          </Col>
        </div>
      </Row>
    </>
  );
};
