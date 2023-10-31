import React from "react";

export const FileUpload = ({
  type,
  id,
  name,
  onChange,
  disabled,
  error,
  multiple,
  accept,
  cssClass,
  errorCssClass,
  fileInputInstance
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        ref={fileInputInstance}
        name={name}
        className={cssClass}
        onChange={onChange}
        disabled={disabled}
        multiple={multiple}
        accept={accept}
      />
      {error && (
        <span className={errorCssClass ? errorCssClass : "fileupload_validation-error-msg"}>{error}</span>
      )}
    </>
  );
};
