import React from "react";
import TallyCurrencyForm from "../Currency/TallyCurrencyForm";
import { ActionIcons } from "../../../components/ActionIcon";

function TallyCurrency() {
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
        <TallyCurrencyForm />
      </div>
    </div>
  );
}

export default TallyCurrency;
