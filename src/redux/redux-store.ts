import ThunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import profileReducer from '../redux/reducers/profile-reducer'
import dialogsReducer from '../redux/reducers/dialogs-reducer'
import sidebarReducer from '../redux/reducers/sidebar-reducer'
import usersReducer from '../redux/reducers/users-reducer'
import authReducer from '../redux/reducers/auth-recucer'


const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	sidebar: sidebarReducer,
	auth: authReducer
})

const store = createStore(reducers, applyMiddleware(ThunkMiddleware))

export default store
