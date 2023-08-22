import ThunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import profileReducer from '../redux/reducers/profile-reducer'
import dialogsReducer from '../redux/reducers/dialogs-reducer'
import sidebarReducer from '../redux/reducers/sidebar-reducer'
import usersReducer from '../redux/reducers/users-reducer'
import loginReducer from './reducers/login-reducer'
import authReducer from './reducers/auth-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  loginPage: loginReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(ThunkMiddleware))

export default store
