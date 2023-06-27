import { IDialog } from "./dialog.interface"
import { IMessage } from "./messages.interface"
import { IUsers } from "./users.interface"

export interface IState {
    profilePage: {
		posts: IDialog[],

	},
	dialogsPage: {
		users: IUsers[],
		messages: IMessage[]
	}
}