import { IPost } from '../../components/main-content/models/post.interface';
import { IProfileInformation } from '../../components/main-content/models/profile-information.interface';

export interface IProfilePage {
  posts: IPost[];
  currentProfile: IProfileInformation | null;
  myProfile: IProfileInformation | null;
  newPostText: string;
  status: string;
  photos: unknown;
}
