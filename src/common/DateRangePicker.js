import React from "react";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

export const DateRangePicker = ({
    rangeId,
    rangeName,
    rangeRef,
    rangeValue,
    minDate,
    maxDate,
    allowEdit,
    calendarMode,
    dateFormat,
    onChange,
    placeholder,
    cssClass,
    showClearButton,
    openOnFocus,
    enabled,
    error,
    readOnly
}) => {
    let date_format = (dateFormat && (dateFormat != '')) ? dateFormat : 'dd-MMM-yyyy';
  return (
    <>
      <DateRangePickerComponent
        id={rangeId}
        name={rangeName}
        ref={rangeRef}
        value={rangeValue}
        min={minDate}
        max={maxDate}
        allowEdit={allowEdit}
        calendarMode={calendarMode}
        format={date_format}
        floatLabelType="Auto"
        placeholder={placeholder}
        cssClass={cssClass}
        onChange={onChange}
        openOnFocus={openOnFocus}
        showClearButton={showClearButton}
        enabled={enabled}
        readOnly={readOnly}
      />
      {error && <span className="validation-error-msg">{error}</span>}
    </>
  );
};
