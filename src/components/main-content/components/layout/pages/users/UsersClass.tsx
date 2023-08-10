import React from 'react'
import styles from "./Users.module.scss"
import { IUser } from '../../../../models/user.interface'
import axios from 'axios'
import defaultUser from '../../../../../../assets/img/default-user.png' 
import Pagination from '../../../../../shared/pagination/Pagination'

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

class UsersClass extends React.Component<IUsersProps> {
    componentDidMount(): void {
        const users = '/users'
        const page = `?page=${this.props.currentPage}`
        const pageSize = `&count=${this.props.pageSize}`
        axios.get('https://social-network.samuraijs.com/api/1.0' + users + page + pageSize).then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

  render(): React.ReactNode {
    return (
      <div className={styles.UsersContainer}>
        <ul className={styles.UsersList}>{this.props.users.map((user:IUser)=> <li className={styles.UserItem} key={user.id}>
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
              {user.followed ? <button onClick={()=>this.props.unsubscribeUser(user.id)}>Unsubscribe</button> : 
              <button onClick={()=>this.props.subscribeUser(user.id)}>Subscribe</button>}
            </div>
          </div>
        </li>)}
      </ul>
        <div className={styles.PaginationContainer}>
            <Pagination pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
             currentPage={this.props.currentPage} setUsers={this.props.setUsers} changePage={this.props.changePage}/>
       </div>
    </div>
    )
  }
}

export default UsersClass