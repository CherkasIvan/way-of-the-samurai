import './index.css'
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux-store/redux-store';

const rootElement = 
document.getElementById('root');
const root = createRoot(rootElement);

export let rendererEntireTree = () => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
            <App  />
      </Provider>
    </BrowserRouter>
      );
  }

  rendererEntireTree();

  store.subscribe(() => {
    rendererEntireTree()
  })