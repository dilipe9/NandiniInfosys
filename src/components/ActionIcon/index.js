import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
// import styles from "./styles/defaultlayout.module.css";
import styles from "../Layout/defaultLayout/styles/defaultlayout.module.css";
// import { div } from "reactstrap";
import {
  addIcon,
  addDisabledIcon,
  editIcon,
  editDisabledIcon,
  resetIcon,
  resetDisabledIcon,
  saveIcon,
  saveDisabledIcon,
  viewIcon,
  viewDisabledIcon,
  approveIcon,
  approveDisabledIcon,
  rejectIcon,
  rejectDisabledIcon,
  processIcon,
  processDisabledIcon,
  copyIcon,
  copyDisabledIcon,
} from "./IconImage";

export const ActionIcons = ({
  add,
  edit,
  save,
  reset,
  view,
  approve,
  reject,
  process,
  addState,
  editState,
  viewState,
  saveState,
  resetState,
  approveState,
  rejectState,
  processState,
  addAction,
  editAction,
  viewAction,
  saveAction,
  resetAction,
  approveAction,
  rejectAction,
  processAction,
  copy,
  copyState,
  copyAction,
}) => {
  const addImg = addState ? addIcon : addDisabledIcon;
  const editImg = editState ? editIcon : editDisabledIcon;
  const viewImg = viewState ? viewIcon : viewDisabledIcon;
  const saveImg = saveState ? saveIcon : saveDisabledIcon;
  const resetImg = resetState ? resetIcon : resetDisabledIcon;
  const approveImg = approveState ? approveIcon : approveDisabledIcon;
  const rejectImg = rejectState ? rejectIcon : rejectDisabledIcon;
  const processImg = processState ? processIcon : processDisabledIcon;
  const copyImg = copyState ? copyIcon : copyDisabledIcon;
  const [menuOpen, setMenuOpen] = useState(false);

  function doNothing() {
    return false;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <IoIosMenu
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ marginTop: "5px" }}
        />
        <div
          className="actionIconRow "
          style={{
            display:
              add ||
              edit ||
              save ||
              view ||
              reset ||
              approve ||
              reject ||
              process ||
              copy
                ? "flex"
                : "none",

            left: menuOpen ? "100px" : "-300px",
          }}
        >
          <div
            className="m-0 actionIconContainer"
            style={{ display: menuOpen ? "block" : "none" }}
          >
            {copy ? (
              <img
                className="actionIconImg"
                src={copyImg}
                title="Copy"
                onClick={copyState ? copyAction : doNothing}
              />
            ) : null}
            {add ? (
              <img
                className="actionIconImg"
                src={addImg}
                title="Add"
                onClick={addState ? addAction : doNothing}
              />
            ) : null}
            {edit ? (
              <img
                className="actionIconImg"
                src={editImg}
                title="Edit"
                onClick={editState ? editAction : doNothing}
              />
            ) : null}
            {view ? (
              <img
                className="actionIconImg"
                src={viewImg}
                title="View"
                onClick={viewState ? viewAction : doNothing}
              />
            ) : null}
            {save ? (
              <img
                className="actionIconImg"
                src={saveImg}
                title="Save"
                onClick={saveState ? saveAction : doNothing}
              />
            ) : null}
            {reset ? (
              <img
                className="actionIconImg"
                src={resetImg}
                title="Reset"
                onClick={resetState ? resetAction : doNothing}
              />
            ) : null}
            {approve ? (
              <img
                className="actionIconImg"
                src={approveImg}
                title="Approve"
                onClick={approveState ? approveAction : doNothing}
              />
            ) : null}
            {reject ? (
              <img
                className="actionIconImg"
                src={rejectImg}
                title="Reject"
                onClick={rejectState ? rejectAction : doNothing}
              />
            ) : null}
            {process ? (
              <img
                className="actionIconImg"
                src={processImg}
                title="Process"
                onClick={processState ? processAction : doNothing}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="bottom-border_Actions"></div>
    </>
  );
};
