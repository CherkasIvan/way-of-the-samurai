import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ActiveDialogs } from "./utils/data/active-dialogs.ts";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <App
    postsData={ActiveDialogs}
    dialogsData={ActiveDialogs}
  />
);
