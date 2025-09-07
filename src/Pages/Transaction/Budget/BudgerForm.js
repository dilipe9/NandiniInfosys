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

export const BudgetForm = () => {
  return (
    <>
      <Row>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            dataSources={[
              { text: "ncujbds", value: "bhjcdvs" },
              { text: "hvcghv", value: "sfdskfbdh" },
              { text: "njdhvfghsv", value: "tuego" },
            ]}
            // componentRef={calculatedonInstance}
            fields={{ text: "text", value: "value" }}
            // filterBarPlaceholder="Country*"
            showDropDownIcon={false}
            popupHeight="185px"
            placeholder="Budget Type"
            text={true}
            cssClass="dropDown_css"
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
            placeholder="Budget Code"
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
            dataSources={[
              { text: "ncujbds", value: "bhjcdvs" },
              { text: "hvcghv", value: "sfdskfbdh" },
              { text: "njdhvfghsv", value: "tuego" },
            ]}
            // componentRef={calculatedonInstance}
            fields={{ text: "text", value: "value" }}
            // filterBarPlaceholder="Country*"
            showDropDownIcon={false}
            popupHeight="185px"
            placeholder="Company"
            text={true}
            cssClass="dropDown_css"
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
            placeholder="Budget Name"
            cssClass="custome-textboxCss"
            floatLabelType="Never"
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
            placeholder={"Budget From Date"}
            showClearButton={true}
            enabled={true}
            // erro
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
            placeholder={"Budget To Date"}
            showClearButton={true}
            enabled={true}
            // erro
          />
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            dataSources={[
              { text: "ncujbds", value: "bhjcdvs" },
              { text: "hvcghv", value: "sfdskfbdh" },
              { text: "njdhvfghsv", value: "tuego" },
            ]}
            // componentRef={calculatedonInstance}
            fields={{ text: "text", value: "value" }}
            // filterBarPlaceholder="Country*"
            showDropDownIcon={false}
            popupHeight="185px"
            placeholder="Apply On"
            text={true}
            cssClass="dropDown_css"
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
            dataSources={[
              { text: "ncujbds", value: "bhjcdvs" },
              { text: "hvcghv", value: "sfdskfbdh" },
              { text: "njdhvfghsv", value: "tuego" },
            ]}
            // componentRef={calculatedonInstance}
            fields={{ text: "text", value: "value" }}
            // filterBarPlaceholder="Country*"
            showDropDownIcon={false}
            popupHeight="185px"
            placeholder="Apply For"
            text={true}
            cssClass="dropDown_css"
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <Button style={{ background: "green", marginRight: "15px" }}>
            Refresh
          </Button>
          <Button style={{ background: "green" }}>Submit</Button>
        </Col>
      </Row>
    </>
  );
};
