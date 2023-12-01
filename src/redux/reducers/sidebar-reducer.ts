// import { IAction } from '../../utils/models/action.interface';
import { ISidebar } from '../../utils/models/sidebar.interface';

const initialState: ISidebar = {
  initialValue: []
};

const sidebarReducer = (
  state: ISidebar = initialState
  // action: IAction
): ISidebar => {
  return state;
};

export default sidebarReducer;
