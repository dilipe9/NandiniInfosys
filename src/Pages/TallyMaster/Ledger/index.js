import React from "react";
import { TallyLedgerForm } from "./TallyLedgerForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyLedger = () => {
  return (
    <div className="main_content_wrapper">
      <div className="main_content_padding">
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
        <TallyLedgerForm />
      </div>
    </div>
  );
};
export default TallyLedger;
