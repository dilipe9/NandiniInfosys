import React from "react";
import TallyGroupForm from "./TallyGroupForm";
import { ActionIcons } from "../../../components/ActionIcon";

function TallyGroup() {
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
        <TallyGroupForm />
      </div>
    </div>
  );
}

export default TallyGroup;
