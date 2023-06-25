import { ActiveUsers } from './active-users.ts';
import { ActiveMessages } from './active-messages.ts';
import { ActivePosts } from './active-posts.ts';


export const State = {
	profilePage: {
		posts: ActivePosts,

	},
	dialogsPage: {
		users: ActiveUsers,
		messages: ActiveMessages
	}

}