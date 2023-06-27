import { ActiveUsers } from './active-users';
import { ActiveMessages } from './active-messages';
import { ActivePosts } from './active-posts';
import { IState } from '../../components/main-content/models/state.interface';

export const State: IState = {
	profilePage: {
		posts: ActivePosts,

	},
	dialogsPage: {
		users: ActiveUsers,
		messages: ActiveMessages
	}
}