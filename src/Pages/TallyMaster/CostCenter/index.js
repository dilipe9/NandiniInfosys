import React from "react";
import TallyCostCenterForm from "./TallyCostCenterForm";
import { ActionIcons } from "../../../components/ActionIcon";

function TallyCostCenter() {
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
        <TallyCostCenterForm />
      </div>
    </div>
  );
}

export default TallyCostCenter;
