import React from "react";
import TallyCompanyForm from "./TallyCompanyForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyCompany = () => {
  return (
    <div className="main_content_wrapper">
      <ActionIcons
        edit={true}
        editState={true}
        save={true}
        saveState={false}
        reset={true}
        resetState={false}
        add={true}
        addState={true}
      />
      <TallyCompanyForm />
    </div>
  );
};
export default TallyCompany;
