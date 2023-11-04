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

function TallyCompanyForm() {
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
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

        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            // dataSources={calculatedOnList}
            // componentRef={calculatedonInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="Country*"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Country"
            text={true}
            cssClass="e-outline"
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
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
            placeholder="State*"
            text={true}
            cssClass="e-outline"
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>

        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Pincode"
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
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Email"
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
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Currency"
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
            placeholder={"Book Start Date"}
            cssClass={"e-outline"}
            showClearButton={true}
            openOnFocus={true}
            enabled={true}
            // erro
          />
        </Col>

        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="GST No."
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
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="CIN No."
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
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Pan No."
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
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Attribute 1"
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
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Attribute 2"
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
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Attribute 3"
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
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Attribute 4"
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
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Attribute 5"
            cssClass="e-outline"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>

        <Col xl={1} lg={2} md={3} sm={4} xs={6}>
          {/* <Label check className="checkboxlabel">
            <Input
              type="radio"
              // checked={parentSchemeChecked}
              name="schemeType"
              // onChange={() => checkboxClick({ name: "Parent Scheme" })}
              // disabled={!formEditable}
            />{" "}
            Status
          </Label> */}
          <CheckboxComponent
            // name={"shankar"}
            // checked={false}
            label={"Status"}
            // handleCheckbox={(e) => console.log(e)}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <TextArea
            name="remark"
            type="textarea"
            placeholder="Address"
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

export default TallyCompanyForm;
