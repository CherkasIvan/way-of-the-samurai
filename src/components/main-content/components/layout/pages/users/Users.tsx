import React, { FC, useState } from 'react';
import styles from './Users.module.scss';
import Pagination from '../../../../../shared/pagination/Pagination';
import { IUser } from '../../../../models/user.interface';
import Preloader from '../../../../../shared/preloader/Preloader';
import { Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../../../../../utils/enums/active-routes.enum';
import User from './User';
import {
  subscribeUsersTC,
  unsubscribeUsersTC
} from '../../../../../../redux/thunk/users-thunk';

interface IUsersProps {
  users: IUser[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isAuth: boolean;
  followingInProgress: number[];
  changePage: (pageNumber: number) => void;
  getUsersTC: (users: string, page: string, pageSize: string) => void;
  subscribeUsersTC: (userId: number) => void;
  unsubscribeUsersTC: (userId: number) => void;
}

const Users: FC<IUsersProps> = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  isFetching,
  isAuth,
  changePage,
  getUsersTC,
  followingInProgress
}) => {
let portionCount = Math.ceil(pageSize / portionSize)
let [portionNumber, setPortionNumber] = useState(1)
let leftPortionNumber = portionNumber / portionSize


  return !isAuth ? (
    <Navigate to={ActiveRoutes.LOGIN} />
  ) : (
    <div className={styles.UsersContainer}>
      <Preloader isFetching={isFetching}></Preloader>
      <ul className={styles.UsersList}>
        {users.map((user: IUser) => (
          <div key={user.id}>
            <User
              user={user}
              userKey={user.id}
              subscribeUsersTC={subscribeUsersTC}
              unsubscribeUsersTC={unsubscribeUsersTC}
              followingInProgress={followingInProgress}></User>
          </div>
        ))}
      </ul>
      <div className={styles.PaginationContainer}>
        <Pagination
          pageSize={pageSize}
          totalItemsCount={totalUsersCount}
          currentPage={currentPage}
          changePage={changePage}
          getUsersTC={getUsersTC}
        />
      </div>
    </div>
  );
};

export default Users;
