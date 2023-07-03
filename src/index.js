import store from "./redux/store";
import './index.css'
import ReactDOM from 'react-dom/client';
import App from "./App";

export const rendererEntireTree = (state) => {
    const documentRender= document.getElementById("root");
    const root = ReactDOM.createRoot(documentRender);
    root.render(<App state={state} dispatch={store.dispatch.bind(store)}/>);
  }

  rendererEntireTree(store.getState())
  store._callSubscriber(rendererEntireTree)