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
} from "../../../common";
import TextArea from "../../../common/TextArea";

export const TargetSchemeForm = () => {
  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <TextBoxCompnonents
            name="schemeCode"
            id="schemeCode"
            type="text"
            placeholder="Scheme Code*"
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
            name="schemeName"
            id="schemeName"
            type="text"
            placeholder="Scheme Name*"
            floatLabelType="Auto"
            // enabled={formEditable}
            // value={fields.schemeName.value}
            // error={fields.schemeName.error}
            // onChange={handleChange}
          ></TextBoxCompnonents>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <DateRangePicker
            rangeId="schemePeriod"
            rangeName="schemePeriod"
            // rangeRef={schemeperiodInstance}
            //rangeValue={rangeValue}
            //minDate={minDate}
            //maxDate={maxDate}
            allowEdit={false}
            calendarMode="Gregorian"
            date_format="dd-MMM-yyyy"
            placeholder="Select Scheme Period*"
            // onChange={handleChange}
            openOnFocus={true}
            showClearButton={false}
            // enabled={formEditable}
            readOnly={false}
            // error={fields.schemePeriod.error}
          ></DateRangePicker>
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DropDownComponent
            itemname="calculatedOn"
            itemId="calculatedOn"
            keyValue="calculatedOn"
            // dataSources={calculatedOnList}
            // componentRef={calculatedonInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="Calculated On*"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Calculated On*"
            text={true}
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.calculatedOn.error}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12} style={{ display: "none" }}>
          <DropDownComponent
            itemname="eligibilityCriteria"
            itemId="eligibilityCriteria"
            keyValue="eligibilityCriteria"
            // dataSources={eligibilityCriteriaList}
            // componentRef={eligibilityCriteriaInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="Qualifying Criteria*"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Qualifying Criteria*"
            text={true}
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.eligibilityCriteria.error}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <DropDownComponent
            itemname="incentiveType"
            itemId="incentiveType"
            keyValue="incentiveType"
            // dataSources={incentiveTypeList}
            // componentRef={incentiveTypeInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="Incentive Type*"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Incentive Type*"
            text={true}
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.incentiveType.error}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={12} xs={12} style={{ marginTop: "10px" }}>
          <div className="form-check-inline">
            <Label check className="checkboxlabel">
              <Input
                type="radio"
                // checked={parentSchemeChecked}
                name="schemeType"
                // onChange={() => checkboxClick({ name: "Parent Scheme" })}
                // disabled={!formEditable}
              />{" "}
              Parent Scheme
            </Label>
            <Label className="ml-5 mt-1 checkboxlabel" check>
              <Input
                type="radio"
                // checked={childSchemeChecked}
                name="schemeType"
                // onChange={() => checkboxClick({ name: "Child Scheme" })}
                // disabled={!formEditable}
              />{" "}
              Child Scheme
            </Label>
          </div>
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <DropDownComponent
            itemname="parentScheme"
            itemId="parentScheme"
            keyValue="parentScheme"
            // dataSources={parentSchemeList}
            // componentRef={parentSchemeInstance}
            fields={{ text: "schemename", value: "schemeid" }}
            filterBarPlaceholder="Parent Scheme"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Parent Scheme"
            text={true}
            // enabled={childSchemeChecked}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.parentScheme.error}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <DropDownComponent
            itemname="linkWithParent"
            itemId="linkWithParent"
            keyValue="linkWithParent"
            dataSources={[
              { option: "No", optionid: 1 },
              { option: "Yes", optionid: 2 },
            ]}
            // componentRef={linkWithParentInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="Link With Parent"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Link With Parent"
            text={true}
            // enabled={childSchemeChecked}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.linkWithParent.error}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          {/* <DropDownComponent
          itemname="billingtype"
          itemId="billingtype"
          keyValue="billingtype"
          dataSources={billingTypeList}
          componentRef={billingTypeInstance}
          fields={{ text: "option", value: "optionid" }}
          filterBarPlaceholder="Billing Type"
          showDropDownIcon={true}
          popupHeight="185px"
          placeholder="Billing Type*"
          text={true}
          
          enabled={formEditable}
          handleChange={handleChange}
          allowFiltering={true}
          error={fields.billingtype.error}
        /> */}
          <MultipleSelectComponent
            itemname="billingtype"
            itemId="billingtype"
            keyValue="billingtype"
            // dataSources={billingTypeList}
            // componentRef={billingTypeInstance}
            fields={{ text: "invname", value: "invtype" }}
            placeholder="Select Billing Types*"
            modes="CheckBox"
            showSelect={true}
            showDropDownIcon={true}
            filterPlaceholder="Search Billing Type*"
            popupHeight="350px"
            // handleChange={handleBillingTypeChange}
            // enabled={formEditable}
          />
        </Col>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}>
          <DropDownComponent
            itemname="groupConsolidation"
            itemId="groupConsolidation"
            keyValue="groupConsolidation"
            dataSources={[
              { option: "No", optionid: 1 },
              { option: "Yes", optionid: 2 },
            ]}
            // componentRef={groupConsolidationInstance}
            fields={{ text: "option", value: "optionid" }}
            filterBarPlaceholder="Group Consolidation*"
            showDropDownIcon={true}
            popupHeight="185px"
            placeholder="Group Consolidation*"
            text={true}
            // enabled={formEditable}
            // handleChange={handleChange}
            allowFiltering={true}
            // error={fields.groupConsolidation.error}
          />
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <DateRangePicker
            rangeId="growthPeriod"
            rangeName="growthPeriod"
            // rangeRef={growthPeriodInstance}
            //rangeValue={rangeValue}
            //minDate={minDate}
            //maxDate={maxDate}
            allowEdit={false}
            calendarMode="Gregorian"
            date_format="dd-MMM-yyyy"
            placeholder="Select Growth Period"
            // onChange={handleChange}
            openOnFocus={true}
            showClearButton={false}
            // enabled={formEditable}
            readOnly={false}
            // error={fields.growthPeriod.error}
          ></DateRangePicker>
        </Col>
        <Col xl={3} lg={3} md={6} sm={12} xs={12} style={{ marginTop: "10px" }}>
          <FormGroup check inline>
            <Label check className="checkboxlabel">
              <Input
                type="checkbox"
                //  checked={isprorate}
                name="prorate"
                // onChange={() => checkboxClick({ name: 'Prorate' })}
                //  disabled={!formEditable}
              />{" "}
              Enable Prorate
            </Label>
          </FormGroup>
        </Col>
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
