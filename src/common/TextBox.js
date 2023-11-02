import React from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

class TextBoxCompnonents extends React.Component {
  constructor(props) {
    super(props);
  }

  created = (args) => {
    this.TextBoxInstance.element.addEventListener(
      "keypress",
      this.props.keyPressMethod
    );
  };

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
      keyPressMethod,
      autocomplete,
      maxlength,
      htmlAttributes,
    } = this.props;

    let textBoxlength = maxlength > 0 ? maxlength : "100";

    if (this.TextBoxInstance) {
      this.TextBoxInstance &&
        this.TextBoxInstance.addAttributes({ maxlength: textBoxlength });
    }

    return (
      <div style={{ width: "100%" }}>
        <TextBoxComponent
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          cssClass={cssClass}
          floatLabelType={floatLabelType}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          enabled={enabled}
          ref={(scope) => {
            this.TextBoxInstance = scope;
          }}
          created={keyPressMethod ? this.created : null}
          autocomplete={autocomplete}
          htmlAttributes={htmlAttributes}
        ></TextBoxComponent>
        {error && <span className="validation-error-msg">{error}</span>}
      </div>
    );
  }
}

export default TextBoxCompnonents;
