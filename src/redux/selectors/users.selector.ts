import { IState } from '../../components/main-content/models/state.interface';

export const getUsers = (state: IState) => {
  return state.usersPage.users;
};

export const getPageSize = (state: IState) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state: IState) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state: IState) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state: IState) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: IState) => {
  return state.usersPage.followingInProgress;
};
