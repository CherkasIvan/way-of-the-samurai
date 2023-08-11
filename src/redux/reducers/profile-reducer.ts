import { IPost } from "../../components/main-content/models/post.interface";
import { ActivePosts } from "../../utils/data/active-posts";
import { StoreEnum } from "../../utils/enums/store.enum";
import { IAction } from "../../utils/models/action.interface";
import { IProfilePage } from "../../utils/models/profile-page.interface";

let initialState: IProfilePage = {
    posts: ActivePosts,
    newPostText: ''
}

const profileReducer = (state:IProfilePage = initialState, action: IAction): IProfilePage =>{
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

export default profileReducer