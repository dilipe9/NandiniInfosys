import React, { useState } from "react";
import { TargetSchemeForm } from "./TargetSchemeForm";
import { ActionIcons } from "../../../components/ActionIcon";
import { TargetSchemeTabs } from "./Tabs";

const TargetScheme = () => {
  const [actionStates, setActionStates] = useState({
    add: true,
    edit: true,
    view: true,
    save: false,
    reset: false,
    copy: true,
    copyMode: false,
    approve: false,
    reject: false,
  });
  return (
    <div className="style_mainContainer__JOE3H">
      <ActionIcons
        add={true}
        addState={actionStates.add}
        // addAction={this.handleAdd}
        edit={true}
        editState={actionStates.edit}
        // editAction={this.handleEdit}
        save={true}
        saveState={actionStates.save}
        // saveAction={this.handleSave}
        view={true}
        viewState={actionStates.view}
        // viewAction={this.handleView}
        reset={true}
        resetState={actionStates.reset}
        // resetAction={this.handleReset}
        // approve={(userRole == 'Superadmin') ? true : false}
        approveState={actionStates.approve}
        // approveAction={() => this.openApprRejPopup({ name: 'Approve' })}
        // reject={(userRole == 'Superadmin') ? true : false}
        rejectState={actionStates.reject}
        // rejectAction={() => this.openApprRejPopup({ name: 'Reject' })}
        copy={true}
        copyState={actionStates.copy}
        // copyAction={this.handleCopy}
      />
      <TargetSchemeForm />
      <TargetSchemeTabs />
    </div>
  );
};

export default TargetScheme;
