import React from "react";
import { TallyStockUnitForm } from "./TallyStockUnitForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyStockUnit = () => {
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
        <TallyStockUnitForm />
      </div>
    </div>
  );
};
export default TallyStockUnit;
