import { StoreEnum } from "../utils/enums/store.enum"
import { IAction } from "../utils/models/action.interface"

export const AddPostActionCreator = (): IAction  => ({type: StoreEnum.ADD_POST})
  
export const AddMessageActionCreator = (): IAction => ({type: StoreEnum.ADD_MESSAGE})
  
export const UpdatePostActionCreator = (message: string): IAction  => ({
      type: StoreEnum.UPDATE_NEW_POST_TEXT,
      payload: message
  })
  
export const UpdateMessageActionCreator = (message: string): IAction  => ({
      type: StoreEnum.UPDATE_MESSAGE,
      payload: message
  })