import React, { FC } from 'react'
import styles from './Users.module.scss'
import Pagination from '../../../../../shared/pagination/Pagination'
import DefaultUser from '../../../../../../assets/img/default-user.png'
import { IUser } from '../../../../models/user.interface'
import Preloader from '../../../../../shared/preloader/Preloader'
import { NavLink } from 'react-router-dom'

interface IUsersProps {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
  changePage: (pageNumber: number) => void
  getUsersTC: (users: string, page: string, pageSize: string) => any
  subscribeUsersTC: (userId: number) => any
  unsubscribeUsersTC: (userId: number) => any
}

const Users: FC<IUsersProps> = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  isFetching,
  followingInProgress,
  changePage,
  getUsersTC,
  subscribeUsersTC,
  unsubscribeUsersTC,
}) => {
  return (
    <div className={styles.UsersContainer}>
      <Preloader isFetching={isFetching}></Preloader>
      <ul className={styles.UsersList}>
        {users.map((user: IUser) => (
          <li className={styles.UserItem} key={user.id}>
            <NavLink to={'/profile/' + user.id}>
              <div className={styles.UserPhotoContainer}>
                <img
                  src={user.photos.small != null ? user.photos.small : DefaultUser}
                  alt={user.photos.small != null ? user.photos.small : DefaultUser}
                  className={styles.UserPhoto}
                />
              </div>
            </NavLink>
            <div className={styles.UserGeneralInformation}>
              <span className={styles.UserName}>{user.name}</span>
              <span className={styles.UserStatus}>{user.status}</span>
            </div>
            <span className={styles.UserLocation}>
              <div className={styles.UserLocationCity}>{user.location?.city}</div>
              <div className={styles.UserLocationCountry}>{user.location?.country}</div>
            </span>
            <div>
              <div className={styles.ButtonContainer}>
                {user.followed ? (
                  <button
                    disabled={followingInProgress.some((id: number) => id === user.id)}
                    onClick={() => {
                      unsubscribeUsersTC(user.id)
                    }}
                  >
                    Unsubscribe
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some((id: number) => id === user.id)}
                    onClick={() => {
                      subscribeUsersTC(user.id)
                    }}
                  >
                    Subscribe
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.PaginationContainer}>
        <Pagination
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          currentPage={currentPage}
          changePage={changePage}
          getUsersTC={getUsersTC}
        />
      </div>
    </div>
  )
}

export default Users
