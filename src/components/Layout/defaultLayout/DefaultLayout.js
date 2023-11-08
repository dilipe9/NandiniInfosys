import { useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import styles from "./styles/defaultlayout.module.css";
import Select from "../../select/Select";
import { useContext, useEffect, useState } from "react";
import {
  Context,
  LayoutContext,
  LayoutContextProvider,
} from "../../../store/store";
import SideMenu from "../sidemenu/Sidemenu";
import Tabs from "../../tabs/tabs";
import Tab from "../../tab/tab";
import { AiFillDownCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Modal from "../../modal/Modal";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";

function MainLayout() {
  const navigate = useNavigate();
  let TabInstance = useRef();
  const { setCompany, user, modal, showModal, CompanyID } = useContext(Context);
  const { tabs, someAct } = useContext(LayoutContext);
  const [showMenu, setShowMenu] = useState(true);
  const [showUserMenu, setShowMuserenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  //   console.log(tabs);

  useEffect(() => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user[0]?.UserName) {
        setUserName(user[0].UserName);
        setLoading(false);
      } else {
        navigate("/login");
        setLoading(false);
      }
    } catch (e) {
      navigate("/");
    }
  }, []);

  function onCompanyChange() {
    const { selectedOptions } = arguments[2];

    setCompany(selectedOptions[0]);
  }

  function logOut() {
    localStorage.removeItem("user");
    navigate("/");
  }

  const checking = (args) => {
    if (args) {
      let tabIndex = -1;
      let selectedIndex = 0;
      if (TabInstance.current != undefined) {
        TabInstance.current.items.forEach((tab, index) => {
          if (tab.header.text === args.name) {
            selectedIndex = tabIndex = index;
          }
        });
      } else {
        selectedIndex = 0;
      }

      if (TabInstance.current != undefined) {
        if (args.name === "") {
        } else if (tabIndex === -1) {
          TabInstance.current.addTab(
            [{ header: { text: args.name }, content: args.component }],
            0
          );
        }
      } else {
        tabIndex = -1;
      }

      if (TabInstance.current != undefined) {
        TabInstance.current.selectedItem = selectedIndex;
      }
    }
  };

  return (
    <div className={styles.main}>
      {showMenu && (
        <div className={styles.sidebar}>
          <SideMenu checking={checking} />
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="left">
            <IoIosMenu
              className={styles.menuIcon}
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
            />
            <span className={styles.headerHeading}>TALLY DATA WAREHOUSE</span>
          </div>
          <div>
            <Select
              key={"selectCompanyHeader"}
              value={1}
              name="Company"
              selectorText="Select Company"
              options={[{ id: 1, title: "Company 1" }]}
              fetch={{
                api: "Company/GetData",
                data: undefined,
                fields: ["ID", "RemoteCmpName"],
              }}
              onChange={onCompanyChange}
            />
            <span
              className={styles.useDetail}
              onClick={() => {
                setShowMuserenu((prev) => !prev);
              }}
            >
              <span>
                <img src="/images/user-img.png" />
              </span>
              <span>{userName}</span>
              <span>
                <AiFillDownCircle />
              </span>
              {showUserMenu && (
                <div className={styles.userMenu}>
                  <ul>
                    <li onClick={logOut}>Logout</li>
                  </ul>
                </div>
              )}
            </span>
          </div>
        </div>
        <div className={styles.appContainer}>
          {modal && (
            <Modal onClose={() => showModal(false)}>
              <p className={styles.modalMessage}>{modal}</p>
            </Modal>
          )}
          <div className="tabsContainer_css">
            <TabComponent
              id="tabelement"
              ref={TabInstance}
              showCloseButton={true}
            ></TabComponent>
          </div>
          {/* {tabs && tabs.length > 0 && (
            <Tabs key={"tab"}>
              {tabs.map((tab, index) => {
                return (
                  <Tab title={tab.name} tab={tab} key={`tabk${index}`}>
                    <tab.component key={`tab_${index}`} />
                  </Tab>
                );
              })}
            </Tabs>
          )} */}
        </div>
      </div>
    </div>
  );
}

function DefaultLayout() {
  return (
    <LayoutContextProvider>
      <MainLayout />
    </LayoutContextProvider>
  );
}
export default DefaultLayout;
