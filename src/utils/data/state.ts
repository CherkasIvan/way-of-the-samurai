import { ActiveUsers } from './active-users';
import { ActiveMessages } from './active-messages';
import { ActivePosts } from './active-posts';
import { IState } from '../../components/main-content/models/state.interface';
import { IMessage } from '../../components/main-content/models/message.interface';
import { IPost } from '../../components/main-content/models/post.interface';
import { useState } from 'react';

export const State: IState = {
	profilePage: {
		posts: ActivePosts,
	},
	dialogsPage: {
		users: ActiveUsers,
		messages: ActiveMessages
	}
}
const [posts, setPosts] = useState(ActivePosts);
const [messages, setMessages] = useState(ActiveMessages);

export const addMessage = (message:string, page:string) => {

	const actualPage = State[page as keyof IState]
	if(actualPage.hasOwnProperty('posts')){
		const post: IPost = {
			id: State.profilePage.posts.length,
			name: 'Ivan',
			message: message,
			counter: 0
		}
		setPosts([...posts, post])
		// State.profilePage.posts.push(post)

	} else {
		const actualMessage: IMessage = {
			id: State.dialogsPage.messages.length,
			message: message,
		}
		// const [messages, setMessages] = useState(ActiveMessages);
		// setMessages(...messages, actualMessage)
		// State.dialogsPage.messages.push(actualMessage)
	}
}
