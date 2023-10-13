import { ActivePosts } from '../../utils/data/active-posts';
import { IProfilePage } from '../../utils/models/profile-page.interface';
import { AddPostAC } from '../actions/actions';
import profileReducer from './profile-reducer';

it('new post should be added', () => {
  const initialState: IProfilePage = {
    posts: ActivePosts,
    currentProfile: null,
    newPostText: '',
    status: ''
  };
  let action = AddPostAC('Hello Ivan, you are the best');
  let newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(6);
});
