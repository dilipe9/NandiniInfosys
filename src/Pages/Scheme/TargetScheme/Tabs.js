import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "reactstrap";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import { SchemeInfo } from "./TabComponent/SchemeInfo";
import { ApplyOn } from "./TabComponent/ApplyOn";

export const TargetSchemeTabs = () => {
  let headerText = [{ text: "Info" }, { text: "Apply On" }];
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Row>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ marginBottom: "0px" }}
      >
        <TabComponent selected={(args) => setSelectedTab(args.selectedIndex)}>
          <TabItemsDirective>
            <TabItemDirective header={headerText[0]} />
            <TabItemDirective header={headerText[1]} />
          </TabItemsDirective>
        </TabComponent>
      </Col>
      <div className="tabContainer_targetSCheme">
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ display: selectedTab === 0 ? "flex" : "none" }}
        >
          <SchemeInfo />
        </Col>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{
            display: selectedTab === 1 ? "flex" : "none",
            padding: "10px",
          }}
        >
          <ApplyOn />
        </Col>
      </div>
    </Row>
  );
};
