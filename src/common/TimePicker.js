import React from "react";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

export const TimePicker = ({
  id,
  name,
  placeholder,
  cssClass,
  floatLabelType,
  showClearButton,
  value,
  format,
  onChange,
  enabled,
  error
}) => {
  return (
      <>
    <TimePickerComponent
      id={id}
      name={name}
      placeholder={placeholder}
      cssClass={cssClass}
      floatLabelType={floatLabelType}
      showClearButton={showClearButton}
      value={value}
      format={format}
      change={onChange}
      enabled={enabled}
    />
     {error && <span className="validation-error-msg">{error}</span>}
    </>
  );
};
