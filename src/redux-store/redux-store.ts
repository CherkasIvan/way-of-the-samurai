import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../redux/reducers/profile-reducer";
import dialogsReducer from "../redux/reducers/dialogs-reducer";
import sidebarReducer from "../redux/reducers/sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    sidebar: sidebarReducer})

let store = configureStore({
    reducer: {
        reducers
    },
  })

export default store