import React from "react";
import TallyCostCategoryForm from "./TallyCostCategoryForm";
import { ActionIcons } from "../../../components/ActionIcon";

function TallyCostCategory() {
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
      <TallyCostCategoryForm />
    </div>
  );
}

export default TallyCostCategory;
