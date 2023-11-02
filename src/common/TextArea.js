import React from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

class TextArea extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {
    const {
      placeholder,
      cssClass,
      floatLabelType,
      name,
      id,
      type,
      value,
      error,
      onChange,
      readOnly,
      enabled,
      multiline,
      maxlength
    } = this.props;
    let maxChar = (maxlength > 0) ? maxlength : 500;
    if(this.TextAreaInstance){
        this.TextAreaInstance && this.TextAreaInstance.addAttributes({maxlength: maxChar});
    }
    return (
      <>
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
          multiline={multiline}
          maxlength={maxChar}
          ref={(scope)=>{this.TextAreaInstance=scope}}
        />
        {error && <span className="validation-error-msg">{error}</span>}
      </>
    );
  }
}

export default TextArea;
