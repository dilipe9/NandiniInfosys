import React from "react";
import { TallyTransactionForm } from "./TallyTransactionForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyTransactions = () => {
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
        <TallyTransactionForm />
      </div>
    </div>
  );
};
export default TallyTransactions;
