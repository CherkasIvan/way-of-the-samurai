import { IPost } from '../../components/main-content/models/post.interface';
import { ActivePosts } from '../../utils/data/active-posts';
import { StoreEnum } from '../../utils/enums/store.enum';
import { IAction } from '../../utils/models/action.interface';
import { IProfilePage } from '../../utils/models/profile-page.interface';

const initialState: IProfilePage = {
  posts: ActivePosts,
  currentProfile: null,
  myProfile: null,
  newPostText: '',
  status: '',
  photos: []
};

const profileReducer = (
  state: IProfilePage = initialState,
  action: IAction
): IProfilePage => {
  switch (action.type) {
    case StoreEnum.ADD_POST: {
      const post: IPost = {
        id: state.posts.length + 1,
        name: 'Ivan',
        message: action.payload,
        counter: 0
      };
      return {
        ...state,
        posts: [...state.posts, post],
        newPostText: ''
      };
    }
    case StoreEnum.SET_PROFILE: {
      return {
        ...state,
        currentProfile: { ...action.payload }
      };
    }
    case StoreEnum.SET_MY_PROFILE: {
      return {
        ...state,
        myProfile: { ...action.payload }
      };
    }
    case StoreEnum.GET_USERS_STATUS: {
      return {
        ...state,
        status: action.payload
      };
    }
    case StoreEnum.UPDATE_MY_STATUS: {
      return {
        ...state,
        status: action.payload
      };
    }
    case StoreEnum.SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        photos: action.payload
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
