import { IPost } from "./post.interface"
import { IMessage } from "./message.interface"
import { IUsers } from "./users.interface"

export interface IState {
    profilePage: {
		posts: IPost[],

	},
	dialogsPage: {
		users: IUsers[],
		messages: IMessage[]
	}
}