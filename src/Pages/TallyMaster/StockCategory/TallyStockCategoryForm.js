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

export const TallyStockCategoryForm = () => {
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
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
        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
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

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
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
      </Row>

      <Row>
        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
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
    </>
  );
};
