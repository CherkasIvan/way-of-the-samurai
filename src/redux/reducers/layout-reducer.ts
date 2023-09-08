import { StoreEnum } from '../../utils/enums/store.enum';
import { IAction } from '../../utils/models/action.interface';
import { ILayout } from '../../utils/models/layout.interface';

const initialState: ILayout = {
  initialized: false
};

const layoutReducer = (
  state: ILayout = initialState,
  action: IAction
): ILayout => {
  switch (action.type) {
    case StoreEnum.SET_INITIALIZED: {
      return {
        ...state,
        initialized: (action.payload = true)
      };
    }
    default:
      return state;
  }
};

export default layoutReducer;
