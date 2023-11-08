import React from "react";
import { TallyStockGodownForm } from "./TallyStockGodownForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyStockGodown = () => {
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
        <TallyStockGodownForm />
      </div>
    </div>
  );
};
export default TallyStockGodown;
