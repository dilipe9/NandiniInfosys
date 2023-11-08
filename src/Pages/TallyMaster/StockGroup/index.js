import React from "react";
import { TallyStockGroupForm } from "./TallyStockGroupForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyStockGroup = () => {
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
        <TallyStockGroupForm />
      </div>
    </div>
  );
};
export default TallyStockGroup;
