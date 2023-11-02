import React from "react";
import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";

class NumericTextBoxComponents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      placeholder,
      cssClass,
      floatLabelType,
      name,
      type,
      value,
      error,
      onChange,
      readOnly,
      enabled,
      id,
      format,
      minValue,
      maxValue
    } = this.props;

    return (
      <>
        <NumericTextBoxComponent
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          cssClass={cssClass}
          floatLabelType={floatLabelType}
          format={format}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          enabled={enabled}
          min={minValue}
          max={maxValue}
          validateDecimalOnType={true}
          decimals={2}
          ref={(scope) => { this.TextBoxInstance = scope }}
        ></NumericTextBoxComponent>
        {error && <span className="validation-error-msg">{error}</span>}
      </>
    );
  }
}

export default NumericTextBoxComponents;
