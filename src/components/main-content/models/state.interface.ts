import { IProfilePage } from "../../../utils/models/profile-page.interface"
import { IDialogsPage } from "../../../utils/models/dialogs-page.interface"
import { IUsersPage } from "../../../utils/models/users-page.interface"

export interface IState {
    profilePage: IProfilePage
	dialogsPage: IDialogsPage
	usersPage: IUsersPage
	sidebar:{}
}