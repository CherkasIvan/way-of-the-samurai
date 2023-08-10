import React, { FC } from 'react'
import styles from './Users.module.scss'
import Pagination from '../../../../../shared/pagination/Pagination'
import defaultUser from '../../../../../../assets/img/default-user.png' 
import { IUser } from '../../../../models/user.interface'

interface IUsersProps {
    users: IUser[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setUsers: (users: IUser[]) => void,
    unsubscribeUser: (userId: number) => void
    subscribeUser: (userId: number) => void
    changePage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
  }

const Users: FC<IUsersProps> = ({users, pageSize, totalUsersCount, currentPage, setUsers, unsubscribeUser, subscribeUser, changePage, setTotalUsersCount}) => {
  return (
        <div className={styles.UsersContainer}>
            <ul className={styles.UsersList}>{users.map((user:IUser)=> <li className={styles.UserItem} key={user.id}>
                <div className={styles.UserPhotoContainer}>
                <img src={user.photos.small != null ? user.photos.small : defaultUser} alt={user.photos.small != null ? user.photos.small : defaultUser}  className={styles.UserPhoto}/>
                </div>
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
                {user.followed ? <button onClick={()=>unsubscribeUser(user.id)}>Unsubscribe</button> : 
                <button onClick={()=>subscribeUser(user.id)}>Subscribe</button>}
                </div>
            </div>
            </li>)}
        </ul>
            <div className={styles.PaginationContainer}>
                <Pagination pageSize={pageSize} totalUsersCount={totalUsersCount}
                currentPage={currentPage} setUsers={setUsers} changePage={changePage}/>
        </div>
    </div>
    )
}

export default Users