import { designation } from "../../forms/masters";
import FormGenerator from "./../../components/form_generator/FormGenerator";

import {
  axios_,
  extractData,
  updateFormData,
  validateForm,
  ResetFormData,
  updateFormOnSelection,
} from "../../utilities/utll";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/store";

export default function DesignationMaster() {
  const [formData, setFormData] = useState(designation);
  const { CompanyID, displayModal, tblRefresh } = useContext(Context);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    setFormData((prev) => {
      let obj = { ...prev };
      obj.forms[1][0].rows[0].controls[0].fetch.data = { CompanyID };
      return obj;
    });
  }, [CompanyID]);

  function handleOnChange() {
    const [e, formItemIndex, ...dropdown] = arguments;
    updateFormData(e, setFormData, formItemIndex); //MANAGE FORM STATE
  }
  async function handleSubmit() {
    const inputData = extractData(formData);

    if (await validateForm(setFormData)) {
      const inputData = extractData(formData);
      try {
        const res = await axios_.post(formData.api, inputData);
        tblRefresh?.designation();
        ResetFormData(setFormData);
        displayModal(res);
      } catch (e) {
        // console.log(e);
        displayModal(null, e.message);
      }
    }
    setEdit(false);
  }
  function handleReset() {
    ResetFormData(setFormData);
  }
  function handleEdit(record) {
    if (!record) return;
    let data = extractData(formData);

    // Fill Form with selected record
    Object.entries(data.Designation).forEach((entry) => {
      updateFormOnSelection(
        setFormData,
        0,
        entry[0],
        "value",
        record[1][entry[0]] ? record[1][entry[0]] : ""
      );
    });
    setEdit(record[1].DesignationId);
  }
  let functions = { handleOnChange, handleSubmit, handleReset, handleEdit };
  return (
    <>
      <div className="main_content_wrapper">
        <FormGenerator formData={formData} functions={functions} />
      </div>
    </>
  );
}
