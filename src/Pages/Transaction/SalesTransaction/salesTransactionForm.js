import React from "react";
import {
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
} from "reactstrap";
// import { Row, Col, Container } from "react-bootstrap";
import TextBoxCompnonents from "../../../common/TextBox";
import {
  DropDownComponent,
  DateRangePicker,
  MultipleSelectComponent,
  CheckboxComponent,
  DatePicker,
} from "../../../common";
import TextArea from "../../../common/TextArea";
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

export const SalesTransactionForm = () => {
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Sales Order No."
            cssClass="custome-textboxCss"
            floatLabelType="Never"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DatePicker
            dateId={"nsdbckj"}
            dateName={"kdjsbck"}
            // refValue
            // PeriodValue,
            // minDate,
            // maxDate,
            // alloowEdit,
            // dateFormat,
            // handleDateChange,
            placeholder={"Date"}
            showClearButton={true}
            enabled={true}
            // erro
          />
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Alias"
            cssClass="custome-textboxCss"
            floatLabelType="Never"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            // dataSources={calculatedOnList}
            // componentRef={calculatedonInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="State"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Party Name*"
            text={true}
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            // dataSources={calculatedOnList}
            // componentRef={calculatedonInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="State"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Sales Ledger*"
            text={true}
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>
      </Row>

      <Row style={{ margin: "5px" }}>
        <GridComponent
          locale="en-Us"
          id={`${"salesTransaction"}_GridComponent_Id`}
          key={`${"salesTransaction"}_GridComponent_Id`}
          allowTextWrap={true}
          allowResizing={false}
          // dataSource={tableData}
          // ref={gridInstance}
          height={"auto"}
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
          //   allowExcelExport={true}
          //   allowSorting={true}
          //   toolbar={toolbar}
          //   allowReordering={true}
          //   allowGrouping={true}
          //   showColumnChooser={true}
          // toolbarClick={handleCSVImport}
        >
          <ColumnsDirective>
            {/* <ColumnDirective
              headerText="S No."
              width="130"
              field="srlno"
              textAlign="Left"
            /> */}
            <ColumnDirective
              field="VCHTYPE"
              headerText="Item Name"
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
              headerText="Quantity"
              width="150"
              textAlign="left"
              allowEditing={false}
            />
            <ColumnDirective
              field="VCHTYPE"
              headerText="Rate(per)"
              width="150"
              textAlign="left"
              allowEditing={false}
            />
            <ColumnDirective
              field="VCHTYPE"
              headerText="Amount"
              width="150"
              textAlign="left"
              allowEditing={false}
            />
            <ColumnDirective
              field="VCHTYPE"
              headerText="Action"
              width="150"
              textAlign="left"
              allowEditing={false}
              allowSorting={false}
              allowFiltering={false}
              template={() => {
                return (
                  <>
                    <i className="fa fa-plus"></i>
                  </>
                );
              }}
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
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          <TextArea
            name="remark"
            type="textarea"
            placeholder="Remark 1"
            cssClass="h-100"
            floatLabelType="Never"
            // value={fields.remark.value}
            // onChange={handleChange}
            // enabled={formEditable}
            multiline={true}
            // error={fields.remark.error}
          />
        </Col>
        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          <TextArea
            name="remark"
            type="textarea"
            placeholder="Remark 2"
            cssClass="h-100"
            floatLabelType="Never"
            // value={fields.remark.value}
            // onChange={handleChange}
            // enabled={formEditable}
            multiline={true}
            // error={fields.remark.error}
          />
        </Col>
        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          <TextArea
            name="remark"
            type="textarea"
            placeholder="Remark 3"
            cssClass="h-100"
            floatLabelType="Never"
            // value={fields.remark.value}
            // onChange={handleChange}
            // enabled={formEditable}
            multiline={true}
            // error={fields.remark.error}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={2} lg={2} md={4} sm={12} xs={12}>
          <Button style={{ background: "green" }}>Submit</Button>
        </Col>
      </Row>
    </>
  );
};
