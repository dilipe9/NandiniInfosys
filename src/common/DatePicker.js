import React from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

export const DatePicker = ({
  dateId,
  dateName,
  refValue,
  PeriodValue,
  minDate,
  maxDate,
  alloowEdit,
  calendarMode,
  dateFormat,
  handleDateChange,
  placeholder,
  cssClass,
  showClearButton,
  openOnFocus,
  enabled,
  error,
}) => {
  let date_format = dateFormat && dateFormat != "" ? dateFormat : "dd-MM-yyyy";

  return (
    <div className={"ristrict_height"}>
      {placeholder && <span className={"input_label_form"}>{placeholder}</span>}
      <DatePickerComponent
        id={dateId}
        name={dateName}
        ref={refValue}
        value={PeriodValue}
        min={minDate}
        max={maxDate}
        allowEdit={alloowEdit}
        calendarMode={calendarMode}
        format={date_format}
        floatLabelType="Never"
        placeholder={placeholder}
        cssClass={cssClass}
        onChange={handleDateChange}
        // openOnFocus={openOnFocus}
        showClearButton={showClearButton}
        enabled={enabled}
      />
      {error && <span className="validation-error-msg">{error}</span>}
    </div>
  );
};
