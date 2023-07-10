import { ActiveUsers } from '../utils/data/active-users';
import { ActiveMessages } from '../utils/data/active-messages';
import { ActivePosts } from '../utils/data/active-posts';
import { IState } from '../components/main-content/models/state.interface';
import { IAction } from '../utils/models/action.interface';
import dialogsReducer from './reducers/dialogs-reducer';
import profileReducer from './reducers/profile-reducer';
import sidebarReducer from './reducers/sidebar-reducer';


let store = {
	_state: {
		profilePage: {
			posts: ActivePosts,
			newPostText: 'it-camasutra'
		},
		dialogsPage: {
			users: ActiveUsers,
			messages: ActiveMessages,
			newMessageText: 'it-camasutra message'
		},
		sidebar:{
		}
	},
	getState(): IState {
		return this._state
	},
	_callSubscriber (observer:IState) {
		console.log(observer)
	return observer
	},
	
	dispatch (action: IAction): void {
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)
		this._callSubscriber(store.getState())
	}
}

export default store