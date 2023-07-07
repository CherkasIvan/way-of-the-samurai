import store from "./redux-store/redux-store";
import './index.css'
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root =  ReactDOM.createRoot(document.getElementById("root"));

export const rendererEntireTree = (state) => {
  root.render(
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </BrowserRouter>);
  }

  rendererEntireTree(store.getState())
  store.subscribe(() => {
    let state = store.getState()
    rendererEntireTree(state)
  })