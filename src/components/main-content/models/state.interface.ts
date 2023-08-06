import { IProfilePage } from "../../../utils/models/profile-page.interface"
import { IDialogsPage } from "../../../utils/models/dialogs-page.interface"

export interface IState {
    profilePage: IProfilePage
	dialogsPage: IDialogsPage
	sidebar:{}
}