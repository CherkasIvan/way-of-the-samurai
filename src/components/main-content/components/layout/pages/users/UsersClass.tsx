import React, {FC} from 'react'
import styles from "./Users.module.scss"
import { IUser } from '../../../../models/user.interface'
import { IUsersPage } from '../../../../../../utils/models/users-page.interface'
import axios from 'axios'

interface IUsersProps {
  usersPage: IUsersPage,
  setUsers: (users: IUser[]) => void,
  unsubscribeUser: (userId: number) => void
  subscribeUser: (userId: number) => void
}

class UsersClass extends React.Component<IUsersProps> {

    constructor(props: IUsersProps){
      super(props)
        const users = '/users'
        axios.get('https://social-network.samuraijs.com/api/1.0' + users).then(response => {
          return this.props.setUsers(response.data.items)
        })
    }

  render(): React.ReactNode {
    return (
      <ul className={styles.UsersList}>{this.props.usersPage.users.map((user:IUser)=> <li className={styles.UserItem} key={user.id}>
  
          <div className={styles.UserPhotoContainer}>
            <img src={user.photos.small != null ? user.photos.small : require("../../../../../../assets/img/default-user.png")} alt={user.photos.small != null ? user.photos.small : 'assets/img/default-user.png'}  className={styles.UserPhoto}/>
          </div>
          <div className={styles.UserGeneralInformation}>      
            <span className={styles.UserName}>{user.name}</span>
            <span className={styles.UserStatus}>{user.status}</span>
          </div>
          <span>
            <div>{user.location?.city}</div>
            <div>{user.location?.country}</div>  
          </span>
        <div>
  
          <div className={styles.ButtonContainer}>
            {user.followed ? <button onClick={()=>this.props.unsubscribeUser(user.id)}>Unsubscribe</button> : 
            <button onClick={()=>this.props.subscribeUser(user.id)}>Subscribe</button>}
          </div>
        </div>
      </li>)}
    </ul>
    )
  }
}

export default UsersClass