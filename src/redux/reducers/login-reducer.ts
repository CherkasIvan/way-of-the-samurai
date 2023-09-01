import { ILoginFormData } from '../../components/main-content/models/login-form-data.interface'
import { IState } from '../../components/main-content/models/state.interface'
import { IAction } from '../../utils/models/action.interface'
import { ILoginPage } from '../../utils/models/login-page.interface'

const initialState: ILoginPage = {
  login: '',
  password: '',
  rememberMe: false,
}

const loginReducer = (state: ILoginPage = initialState, action: IAction): ILoginPage => {
  return state
}

export default loginReducer
