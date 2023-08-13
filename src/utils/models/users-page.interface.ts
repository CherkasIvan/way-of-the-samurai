import { IUser } from '../../components/main-content/models/user.interface';

export interface IUsersPage {
  users: IUser[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
}
