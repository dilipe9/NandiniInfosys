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
  allowFiltering
}) => {
  return (
    <>
      <DropDownListComponent
        id={itemId}
        name={itemname}
        key={keyValue}
        ref={componentRef}
        dataSource={dataSources}
        fields={fields}
        filterBarPlaceholder={filterPlaceholder}
        showDropDownIcon={showDropDownIcon}
        popupHeight={popupHeight}
        change={handleChange}
        placeholder={placeholder}
        enabled={enabled}
        width={width}
        index={index}
        text={text}
        style={style}
        cssClass={cssClass}
        floatLabelType="Auto"
        allowFiltering={allowFiltering}
      />
      {error && <span className="validation-error-msg">{error}</span>}
    </>
  );
};
