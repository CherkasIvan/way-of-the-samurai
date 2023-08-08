import React, {FC} from 'react'
import styles from "./Users.module.scss"
import { IUser } from '../../../../models/user.interface'
import { IUsersPage } from '../../../../../../utils/models/users-page.interface'
import { ActiveUsers } from '../../../../../../utils/data/active-users'

interface IUsersProps {
  usersPage: IUsersPage,
  setUsers: (users: IUser[]) => void,
  unsubscribeUser: (userId:number) => void
  subscribeUser: (userId:number) => void
}

const Users: FC<IUsersProps> = ({usersPage, setUsers, unsubscribeUser, subscribeUser}) => {
  if(usersPage.users.length === 0){
    setUsers(ActiveUsers)
  }

  return (
    <ul>{usersPage.users.map((user:IUser)=> <li key={user.id}>
      <span>
        <div className={styles.UserPhotoContainer}>
          <img src={user.photoUrl} alt={user.photoUrl}  className={styles.UserPhoto}/>
        </div>
        <div className={styles.ButtonContainer}>
          {user.followed ? <button onClick={()=>unsubscribeUser(user.id)}>Unsubscribe</button> : 
          <button onClick={()=>subscribeUser(user.id)}>Subscribe</button>}
        </div>
      </span>

      <span>      
        <div>{user.fullName}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{user.location.city}</div>
        <div>{user.location.country}</div>  
      </span>
      </li>)}</ul>
  )
}

export default Users