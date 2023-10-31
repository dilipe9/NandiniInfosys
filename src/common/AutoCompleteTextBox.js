import React from "react";

import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";

export const AutoCompleteTextBox = ({
  id,
  name,
  fields,
  placeholder,
  componentRef,
  error,
  enabled,
  handleSelect,
  onChange,
  dataSource,
}) => {
  return (
    <>
      <AutoCompleteComponent
        id={id}
        name={name}
        dataSource={dataSource}
        fields={fields}
        placeholder={placeholder}
        cssClass="e-outline"
        floatLabelType="Auto"
        ref={componentRef}
        change={onChange}
        enabled={enabled}
        select={handleSelect}
      />
      {error && <span className="validation-error-msg">{error}</span>}
    </>
  );
};
