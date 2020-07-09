import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Styles from "./Styles";

ReactDOM.render(
  <Styles>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Styles>,
  document.getElementById("root")
);
