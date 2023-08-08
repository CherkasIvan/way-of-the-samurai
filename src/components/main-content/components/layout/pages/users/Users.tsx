import React, {FC} from 'react'
import styles from "./Users.module.scss"
import { IUser } from '../../../../models/user.interface'
import { IUsersPage } from '../../../../../../utils/models/users-page.interface'
import axios from 'axios'

interface IUsersProps {
  usersPage: IUsersPage,
  setUsers: (users: any) => void,
  unsubscribeUser: (userId:number) => void
  subscribeUser: (userId:number) => void
}

const Users: FC<IUsersProps> = ({usersPage, setUsers, unsubscribeUser, subscribeUser}) => {
  if(usersPage.users.length === 0){
    const users = '/users'
    axios.get('https://social-network.samuraijs.com/api/1.0' + users).then(response => {
      return setUsers(response.data.items)
    })
  }

  return (
    <ul>{usersPage.users.map((user:any)=> <li key={user.id}>
      <span>
        <div className={styles.UserPhotoContainer}>
          <img src={user.photos.small != null ? user.photos.small : require("../../../../../../assets/img/default-user.png")} alt={user.photos.small != null ? user.photos.small : 'assets/img/default-user.png'}  className={styles.UserPhoto}/>
        </div>
        <div className={styles.ButtonContainer}>
          {user.followed ? <button onClick={()=>unsubscribeUser(user.id)}>Unsubscribe</button> : 
          <button onClick={()=>subscribeUser(user.id)}>Subscribe</button>}
        </div>
      </span>

      <span>      
        <div>{user.name}</div>
        {/* <div>{user.status}</div> */}
      </span>
      {/* <span>
        <div>{user.location.city}</div>
        <div>{user.location.country}</div>  
      </span> */}
      </li>)}</ul>
  )
}

export default Users