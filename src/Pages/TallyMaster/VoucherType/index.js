import React from "react";
import { TallyVoucherTypeForm } from "./TallyVoucherTypeForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyVoucherType = () => {
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
        <TallyVoucherTypeForm />
      </div>
    </div>
  );
};
export default TallyVoucherType;
