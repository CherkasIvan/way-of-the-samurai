import store from "./redux-store/redux-store";
import './index.css'
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root =  ReactDOM.createRoot(document.getElementById("root"));

export const rendererEntireTree = (state) => {
  root.render(
      <Provider store={state}>
        <BrowserRouter>
            <App  />
        </BrowserRouter>
      </Provider>
      );
  }

  rendererEntireTree(store.getState())
  store.subscribe(() => {
    let state = store.getState()
    rendererEntireTree(state)
  })