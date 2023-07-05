import { StoreEnum } from "../utils/enums/store.enum"

export const AddPostActionCreator = () => ({type: StoreEnum.ADD_POST})
  
export const AddMessageActionCreator = () => ({type: StoreEnum.ADD_MESSAGE})
  
export const UpdatePostActionCreator = (message:string) => ({
      type: StoreEnum.UPDATE_NEW_POST_TEXT,
      payload: message
  })
  
export const UpdateMessageActionCreator = (message:string) => ({
      type: StoreEnum.UPDATE_MESSAGE,
      payload: message
  })