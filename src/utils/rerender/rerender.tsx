import ReactDOM from "react-dom/client";
import App from "../../App";
import "../../index.css";
import { IState } from "../../components/main-content/models/state.interface";


export const rendererEntireTree = (state:IState):any => {
  const documentRender= document.getElementById("root")!
  const root = ReactDOM.createRoot(documentRender);
  root.render(<App state={state}/>);
}

