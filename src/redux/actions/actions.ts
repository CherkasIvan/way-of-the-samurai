import { IAction } from './../../utils/models/action.interface'
import { StoreEnum } from '../../utils/enums/store.enum'
import { IUser } from '../../components/main-content/models/user.interface'
import { IProfileInformation } from '../../components/main-content/models/profile-information.interface'

export const AddPostAC = (message: string): IAction => ({
  type: StoreEnum.ADD_POST,
  payload: message,
})

export const AddMessageAC = (message: string): IAction => ({
  type: StoreEnum.ADD_MESSAGE,
  payload: message,
})

export const UpdatePostAC = (message: string): IAction => ({
  type: StoreEnum.UPDATE_NEW_POST_TEXT,
  payload: message,
})

export const UpdateMessageAC = (message: string): IAction => ({
  type: StoreEnum.UPDATE_MESSAGE,
  payload: message,
})

export const UserSubscribeAC = (userId: number): IAction => ({
  type: StoreEnum.USER_SUBSCRIBE,
  payload: userId,
})

export const UserUnsubscribeAC = (userId: number): IAction => ({
  type: StoreEnum.USER_UNSUBSCRIBE,
  payload: userId,
})

export const SetUsersAC = (users: IUser[]): IAction => ({
  type: StoreEnum.SET_USERS,
  payload: users,
})

export const SetProfileAC = (profile: IProfileInformation): IAction => ({
  type: StoreEnum.SET_PROFILE,
  payload: profile,
})

export const SetCurrentPageAC = (currentPage: number): IAction => ({
  type: StoreEnum.SET_CURRENT_PAGE,
  payload: currentPage,
})

export const SetTotalUsersCountAC = (totalUsersCount: number): IAction => ({
  type: StoreEnum.SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount,
})

export const SetPreloaderAC = (isFetching: boolean): IAction => ({
  type: StoreEnum.TOGGLE_IS_FETCHING,
  payload: isFetching,
})

export const SetPreloaderInProgressAC = (isFetching: boolean, userId: number): IAction => ({
  type: StoreEnum.TOGGLE_IS_SUBSCRIBING_PROGRESS,
  payload: { isFetching, userId },
})

export const SetUserDataAC = (id: number, email: string, login: string): IAction => ({
  type: StoreEnum.SET_USER_DATA,
  payload: { id, email, login },
})
