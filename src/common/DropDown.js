import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

export const DropDownComponent = ({
  itemId,
  itemname,
  keyValue,
  dataSources,
  componentRef,
  fields,
  placeholder,
  showDropDownIcon,
  filterPlaceholder,
  popupHeight,
  handleChange,
  index,
  error,
  width,
  text,
  style,
  cssClass,
  enabled,
  allowFiltering,
}) => {
  return (
    <div className={"ristrict_height"}>
      {placeholder && <span className={"input_label_form"}>{placeholder}</span>}
      <DropDownListComponent
        id={itemId}
        name={itemname}
        key={keyValue}
        ref={componentRef}
        dataSource={dataSources}
        fields={fields}
        filterBarPlaceholder={filterPlaceholder}
        showDropDownIcon={false}
        popupHeight={popupHeight}
        change={handleChange}
        placeholder={placeholder}
        enabled={enabled}
        width={width}
        index={index}
        text={text}
        style={style}
        cssClass={cssClass}
        floatLabelType="Never"
        allowFiltering={allowFiltering}
      />
      {error && <span className="validation-error-msg">{error}</span>}
    </div>
  );
};
