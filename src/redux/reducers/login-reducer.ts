import { IAction } from '../../utils/models/action.interface';
import { ILoginPage } from '../../utils/models/login-page.interface';

const initialState: ILoginPage = {
  email: '',
  password: '',
  rememberMe: false
};

const loginReducer = (
  state: ILoginPage = initialState,
  action: IAction
): ILoginPage => {
  return state;
};

export default loginReducer;
