import React, { FC } from 'react'
import styles from './Users.module.scss'
import Pagination from '../../../../../shared/pagination/Pagination'
import DefaultUser from '../../../../../../assets/img/default-user.png'
import { IUser } from '../../../../models/user.interface'
import Preloader from '../../../../../shared/preloader/Preloader'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

interface IUsersProps {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  setUsers: (users: IUser[]) => void
  unsubscribeUser: (userId: number) => void
  subscribeUser: (userId: number) => void
  changePage: (pageNumber: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

const Users: FC<IUsersProps> = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  isFetching,
  setUsers,
  unsubscribeUser,
  subscribeUser,
  changePage,
  toggleIsFetching,
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
                    onClick={() =>
                      axios
                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '74eec926-80fb-473b-9e58-ad114bf47bb4',
                          },
                        })
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            unsubscribeUser(user.id)
                          }
                        })
                    }
                  >
                    Unsubscribe
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: { 'API-KEY': '74eec926-80fb-473b-9e58-ad114bf47bb4' },
                          },
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            subscribeUser(user.id)
                          }
                        })
                    }
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
          setUsers={setUsers}
          changePage={changePage}
          toggleIsFetching={toggleIsFetching}
        />
      </div>
    </div>
  )
}

export default Users
