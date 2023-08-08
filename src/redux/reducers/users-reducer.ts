import { StoreEnum } from "../../utils/enums/store.enum";
import { IAction } from "../../utils/models/action.interface";
import { IUsersPage } from "../../utils/models/users-page.interface";

let initialState = {
    users: [],
    newPostText: ''
}

const usersReducer = (state:IUsersPage = initialState, action: IAction): IUsersPage => {
    switch(action.type) {
        case StoreEnum.USER_SUBSCRIBE: {
            return {
                ...state,
                 users: state.users.map((user:any) => {
                    if(user.id === action.payload) {
                       return { ...user, followed: true }
                    }
                    return user})
                }
        }
        case StoreEnum.USER_UNSUBSCRIBE: {
            return {
                ...state,
                 users: state.users.map((user:any) => {
                    if(user.id === action.payload) {
                       return { ...user, followed: false }
                    }
                    return user})
                }
        }
        case StoreEnum.SET_USERS: {
            return {
                ...state,
                 users:  [...state.users, ...action.payload]
            }
        }   
        default: return state
    }
  }
export default usersReducer