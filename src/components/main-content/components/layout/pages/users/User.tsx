import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.scss';
import { IUser } from '../../../../models/user.interface';
import DefaultUser from '../../../../../../assets/img/default-user.png';

interface IUserProps {
  user: IUser;
  subscribeUsersTC: (userId: number) => void;
  unsubscribeUsersTC: (userId: number) => void;
  followingInProgress: number[];
  userKey: number;
}

const User: FC<IUserProps> = ({
  user,
  subscribeUsersTC,
  unsubscribeUsersTC,
  followingInProgress,
  userKey
}) => {
  return (
    <li
      className={styles.UserItem}
      key={userKey}>
      <NavLink to={'/profile/' + userKey}>
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
        <div className={styles.UserLocationCountry}>
          {user.location?.country}
        </div>
      </span>
      <div>
        <div className={styles.ButtonContainer}>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(
                (id: number) => id === user.id
              )}
              onClick={() => {
                unsubscribeUsersTC(user.id);
              }}>
              Unsubscribe
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(
                (id: number) => id === user.id
              )}
              onClick={() => {
                subscribeUsersTC(user.id);
              }}>
              Subscribe
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default User;
