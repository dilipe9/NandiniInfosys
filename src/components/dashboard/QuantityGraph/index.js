import React from "react";
import styles from "../style.module.css";
import { AreaChart } from "../Graph/AreaChart";

export const QuantityGraph = () => {
  return (
    <div className={styles.summaryMain}>
      <h2>summary of warehouse (categories wise)</h2>
      <div className={styles.summarySection}>
        <div className={styles.summaryConatiner}>
          <div className={styles.summaryBg}>
            {/* <div className={styles.summaryHeading}> */}
            <div
              style={{
                background: "#16619f",
                color: "white",
                textAlign: "center",
                borderRadius: "30px",
                height: "25px",
                marginTop: "20px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Value
            </div>
            {/* </div> */}
            <div className={styles.chartBox}>
              <AreaChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
