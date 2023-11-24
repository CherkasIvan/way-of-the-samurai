import { usersApi } from '../../api/api';
import { IAction } from '../../utils/models/action.interface';
import {
	SetPreloaderAC,
	SetPreloaderInProgressAC,
	SetTotalUsersCountAC,
	SetUsersAC,
	UserSubscribeAC,
	UserUnsubscribeAC
} from '../actions/actions';

type IDispatch = (arg: IAction) => IAction;

export const requestUsersTC = (
	users: string,
	page: string,
	pageSize: string
) => {
	return async (dispatch: IDispatch) => {
		dispatch(SetPreloaderAC(true));
		const response = await usersApi.getUsers(users, page, pageSize);
		dispatch(SetUsersAC(response.data.items));
		dispatch(SetTotalUsersCountAC(response.data.totalCount));
		dispatch(SetPreloaderAC(false));
	};
};

export const subscribeUsersTC = (userId: number) => {
	return async (dispatch: IDispatch) => {
		try {
			dispatch(SetPreloaderInProgressAC(true, userId));
			const response = await usersApi.subscribeUsersProfile(userId);
			if (response.data.resultCode === 0) {
				dispatch(UserSubscribeAC(userId));
			}
			dispatch(SetPreloaderInProgressAC(false, userId));
		} catch {
			console.error('error');
		}
	}
};


export const unsubscribeUsersTC = (userId: number) => {
	return async (dispatch: IDispatch) => {
		try {
			dispatch(SetPreloaderInProgressAC(true, userId));
			const response = await usersApi.unsubscribeUsersProfile(userId);
			if (response.data.resultCode === 0) {
				dispatch(UserUnsubscribeAC(userId));
			}
			dispatch(SetPreloaderInProgressAC(false, userId));
		} catch {
			console.error('error');
		}
	};
};
