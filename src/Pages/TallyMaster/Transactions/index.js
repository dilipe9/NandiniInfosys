import React from "react";
import { TallyTransactionForm } from "./TallyTransactionForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyTransactions = () => {
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
      <TallyTransactionForm />
    </div>
  );
};
export default TallyTransactions;
