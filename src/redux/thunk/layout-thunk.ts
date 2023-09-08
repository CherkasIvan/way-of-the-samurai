import { InitializedSuccessAC } from '../actions/actions';
import { getMeTC } from './auth-thunk';

export const initializeLayoutTC = () => {
  return (dispatch: any) => {
    const promise = dispatch(getMeTC);
    Promise.all([promise]).then(() => {
      dispatch(InitializedSuccessAC);
    });
  };
};
