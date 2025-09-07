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
import { FileUpload } from "../../../common";
export const PurchaseRequisitionForm = () => {
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
            placeholder="Group Type"
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
            placeholder="Group"
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
            placeholder="Ledger"
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
            placeholder="Department"
            text={true}
            cssClass="dropDown_css"
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
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
            placeholder={"Reciving By Date"}
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
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Quote"
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
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Remarks Technically"
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
          <span className={"input_label_form"}>{"Attchment 1"}</span>
          <div
            style={{
              border: "1px solid grey",
              padding: "2px",
              borderRadius: "5px",
            }}
          >
            <FileUpload
              type="file"
              id="schemeProcessUploader"
              name="schemeProcessUploader"
              // onChange={this.handleSchemeProcessFileSelection}
              // fileInputInstance={(scfi) => {
              //   this.schemeProcesFileInstance = scfi;
              // }}
            />
          </div>
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <span className={"input_label_form"}>{"Attchment 2"}</span>
          <div
            style={{
              border: "1px solid grey",
              padding: "2px",
              borderRadius: "5px",
            }}
          >
            <FileUpload
              type="file"
              id="schemeProcessUploader"
              name="schemeProcessUploader"
              // onChange={this.handleSchemeProcessFileSelection}
              // fileInputInstance={(scfi) => {
              //   this.schemeProcesFileInstance = scfi;
              // }}
            />
          </div>
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <span className={"input_label_form"}>{"Attchment 3"}</span>
          <div
            style={{
              border: "1px solid grey",
              padding: "2px",
              borderRadius: "5px",
            }}
          >
            <FileUpload
              type="file"
              id="schemeProcessUploader"
              name="schemeProcessUploader"
              // onChange={this.handleSchemeProcessFileSelection}
              // fileInputInstance={(scfi) => {
              //   this.schemeProcesFileInstance = scfi;
              // }}
            />
          </div>
        </Col>
      </Row>
      <div style={{ borderTop: "1px solid grey" }}></div>
      <Row style={{ marginTop: "10px" }}>
        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
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
            placeholder="Item"
            text={true}
            cssClass="dropDown_css"
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>
        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Requisition By"
            cssClass="custome-textboxCss"
            floatLabelType="Never"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
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
            placeholder="Supplier"
            text={true}
            cssClass="dropDown_css"
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>
        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
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
        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="comapanyName"
            id="comapanyName"
            type="text"
            placeholder="Purpose"
            cssClass="custome-textboxCss"
            floatLabelType="Never"
            // enabled={formEditable}
            // value={fields.schemeCode.value}
            // error={fields.schemeCode.error}
            // readOnly={true}
            // onChange={handleChange}
          />
        </Col>
        <Col xl={2} lg={2} md={4} sm={6} xs={12}>
          <Button
            style={{
              marginTop: "1rem",
              background: "green",
              padding: "4px",
              width: "60%",
            }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
};
