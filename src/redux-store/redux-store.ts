import {combineReducers, createStore} from 'redux'
import profileReducer from "../redux/reducers/profile-reducer";
import dialogsReducer from "../redux/reducers/dialogs-reducer";
import sidebarReducer from "../redux/reducers/sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    sidebar: sidebarReducer})

let store = createStore(reducers)

export default store