import React from "react";
import {
  MultiSelectComponent,
  CheckBoxSelection,
} from "@syncfusion/ej2-react-dropdowns";
import { Inject } from "@syncfusion/ej2-react-grids";

export const MultipleSelectComponent = ({
  itemId,
  keyValue,
  dataSources,
  componentRef,
  fields,
  placeholder,
  modes,
  showSelect,
  showDropDownIcon,
  filterPlaceholder,
  popupHeight,
  handleChange,
  cssClass,
  enabled,
}) => {
  return (
    <div className={"ristrict_height"} style={{ width: "100%" }}>
      {placeholder && <span className={"input_label_form"}>{placeholder}</span>}
      <MultiSelectComponent
        id={itemId}
        key={keyValue}
        dataSource={dataSources}
        ref={componentRef}
        fields={fields}
        placeholder={placeholder}
        mode={modes}
        showSelectAll={showSelect}
        showDropDownIcon={showDropDownIcon}
        filterBarPlaceholder={filterPlaceholder}
        popupHeight={popupHeight}
        change={handleChange}
        cssClass={cssClass}
        floatLabelType="Never"
        enabled={enabled}
      >
        <Inject services={[CheckBoxSelection]} />
      </MultiSelectComponent>
    </div>
  );
};
