import React from "react";
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
// import {
//   TabComponent,
//   TabItemDirective,
//   TabItemsDirective,
// } from "@syncfusion/ej2-react-navigations";
import { Material } from "./Material";
import { MarketSector } from "./MarketSector";
import { ProductGroup } from "./ProductGroup";
// import { gridPageDefaultLength } from "../../../components/Common/Constants";
import { ExcludeMaterial } from "./ExcludeMaterial";
//import { ProductSubGroup } from "./ProductSubGroup";

export class SchemeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: [
        { text: "Market Sector" },
        { text: "Product Group" },
        { text: "Material" },
        { text: "Exclude Material" },
      ],
      selectedTab: 0,
    };
  }

  Commands = [
    {
      title: "Delete",
      buttonOption: {
        cssClass: "deleteButtonInGridRow",
        iconCss: "gridRowDeleteIcon",
      },
    },
  ];

  handleSelectedTabChange = (args) => {
    this.setState({
      selectedTab: args,
    });
  };

  render() {
    const { selectedTab } = this.state;
    return (
      <Row className="pt0">
        <Col xl={4} lg={4} md={5} sm={12} xs={12} className="reportContainer">
          <GridComponent
            id="schemeGroupGrid"
            key="schemeGroupGrid"
            enableHover={false}
            rowHeight={25}
            // ref={schemeGroupGridInstance}
            // dataSource={schemeGroupList}
            // allowFiltering={formEditable}
            filterSettings={{ type: "Excel" }}
            allowTextWrap={true}
            allowResizeToFit={true}
            allowSorting={true}
            SelectionMode="Row"
            // allowSelection={formEditable}
            allowPaging={false}
            // pageSettings={{ pageSize: gridPageDefaultLength }}
            gridLines="Both"
            // editSettings={{
            //   allowEditing: formEditable,
            //   allowAdding: formEditable,
            //   allowDeleting: formEditable,
            //   mode: "Batch",
            //   newRowPosition: "Bottom",
            // }}
            // cellSaved={schemeGroupGridCellSaved}
            // rowSelected={schemeGroupGridRowSelected}
            // commandClick={schemeGroupRowDelete}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="groupMasterId"
                headerText="groupMasterId"
                allowEditing={false}
                width="0"
                isPrimaryKey={true}
                visible={false}
              />
              <ColumnDirective
                field="groupName"
                headerText="Name"
                // allowEditing={formEditable}
                width="8"
                type="string"
              />
              <ColumnDirective
                field="groupCapLimit"
                headerText="Cap Limit"
                // allowEditing={formEditable}
                width="8"
                type="number"
                editType="numericedit"
              />
              <ColumnDirective
                textAlign="Center"
                width="2"
                commands={this.Commands}
                visible={false}
              />
            </ColumnsDirective>
            <Inject services={[Filter, Sort, gridpage, Edit, CommandColumn]} />
          </GridComponent>
        </Col>
        <Col xl={8} lg={8} md={7} sm={12} xs={12}>
          <Row className="pt0">
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="reportContainer"
            >
              <GridComponent
                id="slabDetailGrid"
                key="slabDetailGrid"
                enableHover={false}
                rowHeight={25}
                // ref={schemeSlabGridInstance}
                // dataSource={schemeSlabList}
                // allowFiltering={formEditable}
                filterSettings={{ type: "Excel" }}
                allowTextWrap={true}
                allowResizeToFit={true}
                allowSorting={true}
                // SelectionMode="Row"
                // allowSelection={formEditable}
                allowPaging={true}
                // pageSettings={{ pageSize: gridPageDefaultLength }}
                gridLines="Both"
                // editSettings={{
                //   allowEditing: formEditable,
                //   allowAdding: formEditable,
                //   allowDeleting: formEditable,
                //   mode: "Batch",
                //   newRowPosition: "Bottom",
                // }}
                // cellSaved={schemeSlabGridCellSaved}
                // commandClick={schemeSlabRowDelete}
              >
                <ColumnsDirective>
                  <ColumnDirective
                    field="groupSlabMasterId"
                    headerText="groupSlabMasterId"
                    allowEditing={false}
                    width="0"
                    isPrimaryKey={true}
                    visible={false}
                  />
                  <ColumnDirective
                    field="slabMasterGroupId"
                    headerText="slabMasterGroupId"
                    allowEditing={false}
                    width="0"
                    visible={false}
                  />
                  <ColumnDirective
                    field="slabFrom"
                    headerText="From"
                    // allowEditing={formEditable}
                    width="100"
                    type="number"
                    editType="numericedit"
                  />
                  <ColumnDirective
                    field="slabTo"
                    headerText="Up To"
                    // allowEditing={formEditable}
                    width="100"
                    type="number"
                    editType="numericedit"
                  />
                  <ColumnDirective
                    field="slabForEvery"
                    headerText="For Every"
                    // allowEditing={formEditable}
                    width="120"
                    type="number"
                    editType="numericedit"
                    // visible={
                    //   !fields.incentiveType.value ||
                    //   fields.incentiveType.value == "2" ||
                    //   fields.incentiveType.value == "3"
                    //     ? true
                    //     : false
                    // }
                  />
                  <ColumnDirective
                    field="slabRate"
                    headerText="Rate"
                    // allowEditing={formEditable}
                    width="90"
                    type="number"
                    editType="numericedit"
                    // visible={
                    //   !fields.incentiveType.value ||
                    //   fields.incentiveType.value == "1"
                    //     ? true
                    //     : false
                    // }
                  />
                  <ColumnDirective
                    field="slabValue"
                    headerText="Value"
                    // allowEditing={formEditable}
                    width="90"
                    type="number"
                    editType="numericedit"
                    // visible={
                    //   !fields.incentiveType.value ||
                    //   fields.incentiveType.value == "2" ||
                    //   fields.incentiveType.value == "3"
                    //     ? true
                    //     : false
                    // }
                  />
                  <ColumnDirective
                    field="slabGrowthRate"
                    headerText="Growth Rate"
                    // allowEditing={formEditable}
                    width="120"
                    type="number"
                    editType="numericedit"
                  />
                  <ColumnDirective
                    field="slabGift"
                    headerText="Gift"
                    // allowEditing={formEditable}
                    width="100"
                    // visible={
                    //   !fields.incentiveType.value ||
                    //   fields.incentiveType.value == "3"
                    //     ? true
                    //     : false
                    // }
                  />
                  <ColumnDirective
                    textAlign="Center"
                    width="30"
                    commands={this.Commands}
                    visible={false}
                  />
                </ColumnsDirective>
                <Inject
                  services={[Filter, Sort, gridpage, Edit, CommandColumn]}
                />
              </GridComponent>
            </Col>
          </Row>
          <Row style={{ padding: "10px" }}>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ marginBottom: "0px" }}
            >
              <TabComponent
                selected={(args) =>
                  this.handleSelectedTabChange(args.selectedIndex)
                }
              >
                <TabItemsDirective>
                  <TabItemDirective header={this.state.headerText[0]} />
                  <TabItemDirective header={this.state.headerText[1]} />
                  <TabItemDirective header={this.state.headerText[2]} />
                  <TabItemDirective header={this.state.headerText[3]} />
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
                style={{
                  display: selectedTab === 2 ? "block" : "none",
                }}
              >
                <Material
                // formEditable={formEditable}
                // materialList={materialList}
                // materialGridInstance={materialGridInstance}
                // handleOpenMaterialList={handleOpenMaterialList}
                // handleMaterialFileSelection={handleMaterialFileSelection}
                // uploadMaterial={uploadMaterial}
                // materialUploaderInstance={materialUploaderInstance}
                />
              </Col>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  display: selectedTab === 0 ? "block" : "none",
                }}
              >
                <MarketSector
                // formEditable={formEditable}
                // marketSectorList={marketSectorList}
                // marketSectorGridInstance={marketSectorGridInstance}
                // handleOpenMarketSector={handleOpenMarketSector}
                />
              </Col>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  display: selectedTab === 1 ? "block" : "none",
                }}
              >
                <ProductGroup
                // formEditable={formEditable}
                // productGroupList={productGroupList}
                // productGroupGridInstance={productGroupGridInstance}
                // handleOpenProductGroup={handleOpenProductGroup}
                />
              </Col>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  display: selectedTab === 3 ? "block" : "none",
                }}
              >
                <ExcludeMaterial
                // formEditable={formEditable}
                // excludeMaterialList={excludeMaterialList}
                // excludeMaterialGridInstance={excludeMaterialGridInstance}
                // handleOpenExcludeMaterialList={handleOpenExcludeMaterialList}
                // handleExcludeMaterialFileSelection={handleExcludeMaterialFileSelection}
                // uploadExcludeMaterial={uploadExcludeMaterial}
                // excludeMaterialUploaderInstance={excludeMaterialUploaderInstance}
                />
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
}
