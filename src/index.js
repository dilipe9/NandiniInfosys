import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "ORg4AjUWIQA/Gnt2V1hiQlBGfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn9Td0xiW3pecXxUQmNa"
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
