import { IProfilePage } from '../../../utils/models/profile-page.interface'
import { IDialogsPage } from '../../../utils/models/dialogs-page.interface'
import { IUsersPage } from '../../../utils/models/users-page.interface'
import { IAuth } from '../../../utils/models/auth.interface'
import { ILoginPage } from '../../../utils/models/login-page.interface'

export interface IState {
  profilePage: IProfilePage
  dialogsPage: IDialogsPage
  usersPage: IUsersPage
  loginPage: ILoginPage
  sidebar: unknown
  auth: IAuth
}
