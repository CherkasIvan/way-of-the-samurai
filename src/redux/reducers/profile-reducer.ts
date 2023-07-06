import { rendererEntireTree } from "../..";
import { IPost } from "../../components/main-content/models/post.interface";
import { StoreEnum } from "../../utils/enums/store.enum";
import { IAction } from "../../utils/models/action.interface";
import { IProfilePage } from "../../utils/models/profile-page.interface";
import store from "../store";

const profileReducer = (state:IProfilePage, action: IAction): IProfilePage =>{
switch(action.type) {
    case StoreEnum.ADD_POST: {
        const post: IPost = {
            id: state.posts.length + 1,
            name: 'Ivan',
            message: state.newPostText,
            counter: 0
        }
        state.posts.push(post)
        state.newPostText=''
        rendererEntireTree(store.getState()) //need refactoring!
        return state
    }
    case StoreEnum.UPDATE_NEW_POST_TEXT :{
        state.newPostText= action.payload
        return state
    }
    default: return state
  }
}

export default profileReducer