import React from "react";
import { TallyStockCategoryForm } from "./TallyStockCategoryForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyStockCategory = () => {
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
      <TallyStockCategoryForm />
    </div>
  );
};
export default TallyStockCategory;
