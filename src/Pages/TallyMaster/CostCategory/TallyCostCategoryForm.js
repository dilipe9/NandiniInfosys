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
function TallyCostCategoryForm() {
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="Company"
            id="company"
            type="text"
            placeholder="Company*"
            cssClass="e-outline"
            floatLabelType="Auto"
          />
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="Name"
            id="name"
            type="text"
            placeholder="Name*"
            cssClass="e-outline"
            floatLabelType="Auto"
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
            showClearButton={true}
            openOnFocus={true}
            enabled={true}
            // erro
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={12} xs={12} style={{ marginTop: "10px" }}>
          <div className="form-check-inline">
            <Label check className="checkboxlabel">
              <Input
                type="radio"
                // checked={parentSchemeChecked}
                name="Status"
                // onChange={() => checkboxClick({ name: "Parent Scheme" })}
                // disabled={!formEditable}
              />{" "}
              Status
            </Label>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ display: "none" }}
        >
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
}

export default TallyCostCategoryForm;
