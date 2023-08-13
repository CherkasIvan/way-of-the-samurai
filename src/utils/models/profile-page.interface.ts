import { IPost } from '../../components/main-content/models/post.interface';

export interface IProfilePage {
  posts: IPost[];
  newPostText: string;
}
