import { ActiveUsers } from '../utils/data/active-users';
import { ActiveMessages } from '../utils/data/active-messages';
import { ActivePosts } from '../utils/data/active-posts';
import { IState } from '../components/main-content/models/state.interface';

export const State: IState = {
	profilePage: {
		posts: ActivePosts,
		newPostText: 'it-camasutra'
	},
	dialogsPage: {
		users: ActiveUsers,
		messages: ActiveMessages
	},
	sidebar:{
	}
}