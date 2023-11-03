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
  NumericTextBoxComponent,
  DatePicker,
} from "../../../common";
import TextArea from "../../../common/TextArea";

export const TallyStockItemForm = () => {
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Company"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Name"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>

        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            // dataSources={calculatedOnList}
            // componentRef={calculatedonInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="Parent*"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Parent"
            text={true}
            cssClass="e-outline"
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            // dataSources={calculatedOnList}
            // componentRef={calculatedonInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="Category*"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Category"
            text={true}
            cssClass="e-outline"
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Category Name"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Description"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Costing Method"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="UOM"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Alt UOM"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Conversion"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Denominator"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Opening Balance"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Opening Value"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Opening Rate"
            cssClass="e-outline"
            floatLabelType="Auto"
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
            // calendarMode,
            // dateFormat,
            // handleDateChange,
            placeholder={"Uploaded On"}
            cssClass={"e-outline"}
            showClearButton={true}
            openOnFocus={true}
            enabled={true}
            // erro
          />
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <Label check className="checkboxlabel">
            <Input
              type="radio"
              // checked={parentSchemeChecked}
              name="schemeType"
              // onChange={() => checkboxClick({ name: "Parent Scheme" })}
              // disabled={!formEditable}
            />{" "}
            Status
          </Label>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <TextArea
            name="remark"
            type="textarea"
            placeholder="Remark"
            cssClass="e-outline h-100"
            floatLabelType="Auto"
            // value={fields.remark.value}
            // onChange={handleChange}
            // enabled={formEditable}
            multiline={true}
            // error={fields.remark.error}
          />
        </Col>
      </Row>
    </>
  );
};
