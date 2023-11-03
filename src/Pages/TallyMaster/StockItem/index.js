import React from "react";
import { TallyStockItemForm } from "./TallyStockItemForm";
import { ActionIcons } from "../../../components/ActionIcon";

const TallyStockItem = () => {
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
      <TallyStockItemForm />
    </div>
  );
};
export default TallyStockItem;
