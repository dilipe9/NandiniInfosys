import React from "react";
import { Button, Col, Row } from "reactstrap";
import TextBoxCompnonents from "../../../common/TextBox";
import {
  DropDownComponent,
  DateRangePicker,
  MultipleSelectComponent,
  CheckboxComponent,
  DatePicker,
} from "../../../common";
import TextArea from "../../../common/TextArea";

export const BudgetPlanningForm = () => {
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            dataSources={[
              { text: "Seema Commercial Corp.", value: "bhjcdvs" },
              { text: "Sample", value: "sfdskfbdh" },
              { text: "Nirmal Industries Pvt. ltd", value: "tuego" },
            ]}
            // componentRef={calculatedonInstance}
            fields={{ text: "text", value: "value" }}
            // filterBarPlaceholder="Country*"
            showDropDownIcon={false}
            popupHeight="185px"
            placeholder="Ledger"
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
            placeholder="Budget"
            cssClass="custome-textboxCss"
            floatLabelType="Never"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={2} lg={2} md={4} xs={6} sm={6}>
          <Button
            style={{
              marginTop: "1rem",
              padding: "5px",
              backgroundColor: "green",
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};
