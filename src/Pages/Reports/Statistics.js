import { statistics } from "../../forms/reports";
import { Context } from "../../store/store";
import FormGenerator from "../../components/form_generator/FormGenerator";
import { useContext, useEffect, useState } from "react";

export default function Statistics() {
  const [formData, setFormData] = useState(statistics);
  const { CompanyID } = useContext(Context);
  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[0][0].rows[0].controls[0].fetch.data = { Companyid: CompanyID };
      return obj;
    });

    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[0][0].rows[0].controls[1].fetch.data = { Companyid: CompanyID };
      return obj;
    });
  }, [CompanyID]);

  function handleOnChange() {}
  function handleSubmit() {}
  let functions = { handleOnChange, handleSubmit };
  return (
    <>
      <div className="main_content_wrapper">
        <FormGenerator formData={formData} functions={functions} />
      </div>
    </>
  );
}
