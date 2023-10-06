import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./store/store";
import { setCulture, registerLicense } from "@syncfusion/ej2-base";
setCulture("en-US");
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXZceHRSRWlcVkBzW0c="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
