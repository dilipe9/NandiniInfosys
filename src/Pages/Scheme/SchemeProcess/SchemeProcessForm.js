import React from "react";
import { Col, Row, Button } from "reactstrap";
import TextBoxCompnonents from "../../../common/TextBox";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ActionIcons } from "../../../components/ActionIcon";
import { FileUpload } from "../../../common";
// import { ActionIcons } from "../../../components/Common/ActionIcons";
// import {
//   gridPageDefaultLength,
//   serverAPI,
//   ToolbarOptions,
// } from "../../../components/Common/Constants";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Filter,
  Inject,
  Sort,
  Page as gridpage,
  Toolbar,
  ExcelExport,
} from "@syncfusion/ej2-react-grids";

export const SchemeProcessForm = (
  {
    // fields,
    // showSchemeSelectBtn,
    // openSchemeListPopup,
    // processAction,
    // process,
    // viewAction,
    // view,
    // schemeDetailData,
    // schemeProcessDetailGridInstance,
    // handleToolbarClick,
  }
) => {
  return (
    <>
      <Row style={{ marginTop: "1rem" }}>
        <Col xl={3} lg={3} md={6} sm={12} xs={12} className="d-flex ">
          <div className="w-100">
            <TextBoxCompnonents
              name="schemeCode"
              id="schemeCode"
              type="text"
              placeholder="Scheme Code*"
              cssClass="e-outline"
              floatLabelType="Auto"
              autocomplete="off"
              // value={fields.schemeCode.value}
              // error={fields.schemeCode.error}
              enabled={false}
            ></TextBoxCompnonents>
          </div>

          <Button
            className="getListButtonRightArrow"
            style={{ marginTop: "1rem" }}
            // onClick={openSchemeListPopup}
            // style={{ display: showSchemeSelectBtn ? "block" : "none" }}
          >
            <MdKeyboardArrowRight />
          </Button>
        </Col>
        <Col xl={3} lg={3} md={6} sm={12} xs={12}>
          <TextBoxCompnonents
            name="schemeName"
            id="schemeName"
            type="text"
            placeholder="Scheme Name*"
            cssClass="e-outline"
            floatLabelType="Auto"
            autocomplete="off"
            // value={fields.schemeName.value}
            // error={fields.schemeName.error}
            enabled={false}
          ></TextBoxCompnonents>
        </Col>
        <Col xl={3} lg={3} md={6} sm={12} xs={12} id="SchemeProcessIcons">
          {/* <ActionIcons
            process={true}
            processState={true}
            // processAction={processAction}
            view={true}
            viewState={true}
            // viewAction={viewAction}
          /> */}
        </Col>
      </Row>
      {/* {scheme_id > 0 ? ( */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <FileUpload
            type="file"
            id="schemeProcessUploader"
            name="schemeProcessUploader"
            // onChange={this.handleSchemeProcessFileSelection}
            // fileInputInstance={(scfi) => {
            //   this.schemeProcesFileInstance = scfi;
            // }}
          />
          <Button
            style={{ background: "#16619f" }}
            size="sm"
            // onClick={this.uploadSchemeProcessFile}
          >
            Upload Document
          </Button>
          <p>
            <a href={""} target="_blank">
              Click Here
            </a>{" "}
            to download document
          </p>
        </Col>
      </Row>
      {/* ) : null} */}
      <Row>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="reportContainer"
        >
          <GridComponent
            id="schemeSummaryReportGrid"
            key="schemeSummaryReportGrid"
            // ref={(spdgi) => (this.schemeProcessDetailGridInstance = spdgi)}
            enableHover={true}
            rowHeight={25}
            // dataSource={schemeDetailData}
            allowFiltering={true}
            filterSettings={{ type: "Excel" }}
            allowTextWrap={true}
            allowResizeToFit={true}
            allowSorting={true}
            SelectionMode="Row"
            allowSelection={true}
            allowPaging={true}
            allowExcelExport={true}
            // toolbar={ToolbarOptions}
            // toolbarClick={this.handleToolbarClick}
            // pageSettings={{ pageSize: gridPageDefaultLength }}
            gridLines="Both"
            // dataBound={this.dataBound.bind(this)}
            // actionBegin={this.actionBegin.bind(this)}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="schemeid"
                headerText="Scheme Id"
                allowEditing={false}
                width="0"
                isPrimaryKey={true}
                visible={false}
              />
              <ColumnDirective
                headerText="S. No."
                width="100"
                textAlign="Center"
                // valueAccessor={this.rowNumerCal.bind(this)}
              />
              <ColumnDirective
                field="schemename"
                headerText="Scheme Name"
                allowEditing={false}
                width="180"
              />
              <ColumnDirective
                field="schemegrouptitle"
                headerText="Group Title"
                allowEditing={false}
                width="150"
              />
              <ColumnDirective
                field="slabname"
                headerText="Slab Name"
                allowEditing={false}
                width="150"
              />
              <ColumnDirective
                field="customercode"
                headerText="Customer Code"
                allowEditing={false}
                width="200"
              />
              <ColumnDirective
                field="customername"
                headerText="Customer Name"
                allowEditing={false}
                width="200"
              />
              <ColumnDirective
                field="BaseQty"
                headerText="Base Qty."
                allowEditing={false}
                width="150"
              />
              <ColumnDirective
                field="Amount"
                headerText="Amount"
                allowEditing={false}
                width="150"
              />
              <ColumnDirective
                field="CNAmount"
                headerText="CN Amount"
                allowEditing={false}
                width="150"
              />
              <ColumnDirective
                field="gift"
                headerText="Gift"
                allowEditing={false}
                width="120"
              />
            </ColumnsDirective>
            <Inject services={[Filter, Sort, gridpage, Toolbar, ExcelExport]} />
          </GridComponent>
        </Col>
      </Row>
      {/* <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className='reportContainer'>
                    <GridComponent
                        id="schemeSummaryReportGrid"
                        key="schemeSummaryReportGrid"
                        ref={schemeProcessDetailGridInstance}
                        enableHover={true}
                        rowHeight={25}
                        dataSource={schemeDetailData}
                        allowFiltering={true}
                        filterSettings={{ type: "Excel" }}
                        allowTextWrap={true}
                        allowResizeToFit={true}
                        allowSorting={true}
                        SelectionMode="Row"
                        allowSelection={true}
                        allowPaging={true}
                        allowExcelExport={true}
                        toolbar={ToolbarOptions}
                        toolbarClick={handleToolbarClick}
                        pageSettings={{ pageSize: gridPageDefaultLength }}
                        gridLines="Both"
                    >
                        <ColumnsDirective>
                            <ColumnDirective
                                field="schemeid"
                                headerText="Scheme Id"
                                allowEditing={false}
                                width="0"
                                isPrimaryKey={true}
                                visible={false}
                            />
                            <ColumnDirective
                                field="schemename"
                                headerText="Scheme Name"
                                allowEditing={false}
                                width="180"
                            />
                            <ColumnDirective
                                field="schemegrouptitle"
                                headerText="Group Title"
                                allowEditing={false}
                                width="150"
                            />
                            <ColumnDirective
                                field="slabname"
                                headerText="Slab Name"
                                allowEditing={false}
                                width="150"
                            />
                            <ColumnDirective
                                field="customercode"
                                headerText="Customer Code"
                                allowEditing={false}
                                width="200"
                            />
                            <ColumnDirective
                                field="customername"
                                headerText="Customer Name"
                                allowEditing={false}
                                width="200"
                            />
                            <ColumnDirective
                                field="BaseQty"
                                headerText="Base Qty."
                                allowEditing={false}
                                width="150"
                            />
                            <ColumnDirective
                                field="Amount"
                                headerText="Amount"
                                allowEditing={false}
                                width="150"
                            />
                            <ColumnDirective
                                field="CNAmount"
                                headerText="CN Amount"
                                allowEditing={false}
                                width="150"
                            />
                            <ColumnDirective
                                field="gift"
                                headerText="Gift"
                                allowEditing={false}
                                width="120"
                            />
                        </ColumnsDirective>
                        <Inject services={[Filter, Sort, gridpage, Toolbar, ExcelExport]} />
                    </GridComponent>
                </Col>
            </Row> */}
    </>
  );
};
