import { useEffect, useState } from "react";
import routes from "../../../constant/routes";
import styles from "./styles/sidemenue.module.css";
import { useContext } from "react";
import { LayoutContext } from "../../../store/store";

import MenuList from "../../MenuList/MenuList";

export default function SideMenu({ checking }) {
  const { activeTab, activateTab } = useContext(LayoutContext);

  useEffect(() => {
    activateTab(routes[0], true);
  }, []);

  function changeTab(child) {
    checking(child);
    activateTab(child, true);
  }

  return (
    <>
      <div className={styles.sideMenu}>
        <div className={styles.companyLogo}>
          <img src={"/Images/logo.png"} />
        </div>
        {routes &&
          routes.length > 0 &&
          routes.map((route, routeIndex) => {
            return route?.children ? (
              <MenuList
                route={route}
                routeIndex={routeIndex}
                key={`menu_accordial${routeIndex}`}
                checking={checking}
              />
            ) : (
              <ul className={`${styles.ulHeader}`} key={`rounte${routeIndex}`}>
                <p
                  className={`${
                    activeTab.name === route.name ? styles.active : ""
                  }`}
                  onClick={route?.component ? changeTab.bind(this, route) : ""}
                >
                  <route.icon /> {route.name}
                </p>
              </ul>
            );
          })}
      </div>
    </>
  );
}
