import { getUsers, subscribeUserApi, unsubscribeUserApi } from '../../api/api'
import { SetPreloaderAC, SetPreloaderInProgressAC, SetTotalUsersCountAC, SetUsersAC, UserSubscribeAC, UserUnsubscribeAC } from '../actions/actions'

export const getUsersTC = (users: string, page: string, pageSize: string) => {
	return (dispatch: any) => {
		dispatch(SetPreloaderAC(true))
		getUsers(users, page, pageSize).then((response) => {
			dispatch(SetUsersAC(response.data.items))
			dispatch(SetTotalUsersCountAC(response.data.totalCount))
			dispatch(SetPreloaderAC(false))
		})
	}
}

export const subscribeUsersTC = (userId: number) => {
	return (dispatch: any) => {
		dispatch(SetPreloaderInProgressAC(true, userId))
		subscribeUserApi(userId).then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(UserSubscribeAC(userId))
			}
			dispatch(SetPreloaderInProgressAC(false, userId))
		})
	}
}

export const unsubscribeUsersTC = (userId: number) => {
	return (dispatch: any) => {
		dispatch(SetPreloaderInProgressAC(true, userId))
		unsubscribeUserApi(userId).then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(UserUnsubscribeAC(userId))
			}
			dispatch(SetPreloaderInProgressAC(false, userId))
		})
	}
}