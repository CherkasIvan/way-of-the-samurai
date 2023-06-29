import { IMessage } from "../../components/main-content/models/message.interface"
import { IPost } from "../../components/main-content/models/post.interface"
import { IState } from "../../components/main-content/models/state.interface"
import { ActiveMessages } from "../data/active-messages"
import { ActivePosts } from "../data/active-posts"
import { State } from "../../redux/state"

export const addMessage = (message:string, page:string) => {
	const actualPage = State[page as keyof IState]
	if(actualPage.hasOwnProperty('posts')){
		const post: IPost = {
			id: State.profilePage.posts.length,
			name: 'Ivan',
			message: message,
			counter: 0
		}
		State.profilePage.posts.push(post)
		return ActivePosts

	} else {
		const actualMessage: IMessage = {
			id: State.dialogsPage.messages.length,
			message: message,
		}
		State.dialogsPage.messages.push(actualMessage)
		return ActiveMessages
	}
}