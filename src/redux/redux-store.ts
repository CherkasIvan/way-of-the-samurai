import ThunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from '../redux/reducers/profile-reducer';
import dialogsReducer from '../redux/reducers/dialogs-reducer';
import sidebarReducer from '../redux/reducers/sidebar-reducer';
import usersReducer from '../redux/reducers/users-reducer';
import loginReducer from './reducers/login-reducer';
import authReducer from './reducers/auth-reducer';
import { reducer as formReducer } from 'redux-form';
import layoutReducer from './reducers/layout-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  loginPage: loginReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  layout: layoutReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
