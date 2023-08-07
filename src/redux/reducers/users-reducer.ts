import { IPost } from "../../components/main-content/models/post.interface";
import { ActiveUsers } from "../../utils/data/active-users";
import { StoreEnum } from "../../utils/enums/store.enum";
import { IAction } from "../../utils/models/action.interface";
import { IUsersPage } from "../../utils/models/users-page.interface";

let initialState = {
    users: ActiveUsers,
    newPostText: ''
}

const usersReducer = (state:IUsersPage = initialState, action: IAction): IUsersPage =>{
switch(action.type) {
    case StoreEnum.ADD_POST: {
        const post: IPost = {
            id: state.posts.length + 1,
            name: 'Ivan',
            message: action.payload,
            counter: 0
        }
        return {
            ...state,
            posts: [...state.posts, post],
            newPostText: ''
        }
    }
    case StoreEnum.UPDATE_NEW_POST_TEXT: {
        return {
            ...state, 
            newPostText: action.payload}
    }
    default: return state
  }
}

export default usersReducer