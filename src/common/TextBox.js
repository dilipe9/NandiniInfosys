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
  handleOnFocus = (args) => {
    if (args) {
      args.target.classList.add("shadow_for_inputbox");
    }
  };

  handleOnBlur = (args) => {
    if (args) {
      args.target.classList.remove("shadow_for_inputbox");
    }
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
      <div className={"ristrict_height"} style={{ width: "100%" }}>
        {placeholder && (
          <span className={"input_label_form"}>{placeholder}</span>
        )}
        <TextBoxComponent
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          cssClass={"custome-textboxCss"}
          floatLabelType={"Never"}
          value={value}
          onChange={onChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
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
