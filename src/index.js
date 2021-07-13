import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import { Spinner } from "react-bootstrap";

import "./i18nextConf";

ReactDOM.render(
  <Suspense
    fallback={<Spinner animation="border" variant="light" role="status" />}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
