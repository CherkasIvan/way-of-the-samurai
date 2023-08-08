import { IUser } from "../components/main-content/models/user.interface"
import { StoreEnum } from "../utils/enums/store.enum"
import { IAction } from "../utils/models/action.interface"

export const AddPostActionCreator = (message: string): IAction  => ({
  type: StoreEnum.ADD_POST,
  payload: message
})
  
export const AddMessageActionCreator = (message: string): IAction => ({
  type: StoreEnum.ADD_MESSAGE,
  payload: message})
  
export const UpdatePostActionCreator = (message: string): IAction  => ({
      type: StoreEnum.UPDATE_NEW_POST_TEXT,
      payload: message
  })
  
export const UpdateMessageActionCreator = (message: string): IAction  => ({
      type: StoreEnum.UPDATE_MESSAGE,
      payload: message
  })

  export const UserSubscribeActionCreator = (userId: number): IAction  => ({
    type: StoreEnum.USER_SUBSCRIBE,
    payload: userId
})

export const UserUnsubscribeActionCreator = (userId: number): IAction  => ({
    type: StoreEnum.USER_UNSUBSCRIBE,
    payload: userId
})

export const SetUserActionCreator = (users: IUser[]): IAction  => ({
  type: StoreEnum.SET_USERS,
  payload: users
})