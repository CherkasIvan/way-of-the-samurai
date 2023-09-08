import { usersApi } from '../../api/api';
import { IAction } from '../../utils/models/action.interface';
import {
  SetPreloaderAC,
  SetPreloaderInProgressAC,
  SetTotalUsersCountAC,
  SetUsersAC,
  UserSubscribeAC,
  UserUnsubscribeAC,
} from '../actions/actions';

type IDispatch = (arg: IAction) => IAction;

export const requestUsersTC = (users: string, page: string, pageSize: string) => {
  return (dispatch: IDispatch) => {
    dispatch(SetPreloaderAC(true));
    usersApi.getUsers(users, page, pageSize).then((response) => {
      dispatch(SetUsersAC(response.data.items));
      dispatch(SetTotalUsersCountAC(response.data.totalCount));
      dispatch(SetPreloaderAC(false));
    });
  };
};

export const subscribeUsersTC = (userId: number) => {
  return (dispatch: IDispatch) => {
    dispatch(SetPreloaderInProgressAC(true, userId));
    usersApi.subscribeUsersProfile(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(UserSubscribeAC(userId));
      }
      dispatch(SetPreloaderInProgressAC(false, userId));
    });
  };
};

export const unsubscribeUsersTC = (userId: number) => {
  return (dispatch: IDispatch) => {
    dispatch(SetPreloaderInProgressAC(true, userId));
    usersApi.unsubscribeUsersProfile(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(UserUnsubscribeAC(userId));
      }
      dispatch(SetPreloaderInProgressAC(false, userId));
    });
  };
};
