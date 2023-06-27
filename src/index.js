import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { State } from "./utils/data/state";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<App state={State} />);
