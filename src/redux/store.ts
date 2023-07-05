import { ActiveUsers } from '../utils/data/active-users';
import { ActiveMessages } from '../utils/data/active-messages';
import { ActivePosts } from '../utils/data/active-posts';
import { IState } from '../components/main-content/models/state.interface';
import { IMessage } from '../components/main-content/models/message.interface';
import { IPost } from '../components/main-content/models/post.interface';
import { StoreEnum } from '../utils/enums/store.enum';
import { rendererEntireTree } from '..';

export interface IActionType {
	type:string
	payload?: any
}

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
	return observer
	},
	
	dispatch (action: IActionType): void {
		if(action.type===StoreEnum.ADD_POST) {
			const post: IPost = {
				id: this._state.profilePage.posts.length + 1,
				name: 'Ivan',
				message: this._state.profilePage.newPostText,
				counter: 0
			}
			this._state.profilePage.posts.push(post)
			rendererEntireTree(store.getState())
			this._state.profilePage.newPostText=''
		} 


		else if (action.type===StoreEnum.UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText= action.payload
			this._callSubscriber(this._state)
		}


		else if (action.type===StoreEnum.ADD_MESSAGE) {
			const actualMessage: IMessage = {
				id: this._state.dialogsPage.messages.length + 1,
				message: this._state.dialogsPage.newMessageText,
			}
			this._state.dialogsPage.messages.push(actualMessage)
			rendererEntireTree(store.getState())
			this._state.dialogsPage.newMessageText=''
		}


		else if (action.type===StoreEnum.UPDATE_MESSAGE) {
			this._state.dialogsPage.newMessageText= action.payload
			this._callSubscriber(this._state)
		}
	}
}


export default store
window.store = store