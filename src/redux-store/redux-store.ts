import {combineReducers, createStore} from 'redux'
import profileReducer from "../redux/reducers/profile-reducer";
import dialogsReducer from "../redux/reducers/dialogs-reducer";
import sidebarReducer from "../redux/reducers/sidebar-reducer";
import usersReducer from '../redux/reducers/users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    usersPage: usersReducer,
    sidebar: sidebarReducer})

let store = createStore(reducers)

export default store