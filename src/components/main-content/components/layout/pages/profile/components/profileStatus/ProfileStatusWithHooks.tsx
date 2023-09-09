import React, { FC, useState } from 'react';
import styles from './ProfileStatus.module.scss';

interface IProfileStatusProps {
  status: string;
  updateMyStatusTC: (message: string) => any;
}

const ProfileStatusWithHooks: FC<IProfileStatusProps> = ({
  status,
  updateMyStatusTC
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [statusChange, setStatusChange] = useState<string>(status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateMyStatusTC(statusChange);
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusChange(e.target.value);
  };

  return (
    <>
      {!editMode ? (
        <div
          onDoubleClick={activateEditMode}
          className={styles.ProfileStatusContainer}>
          <span className={styles.ProfileActualStatus}>{status}</span>
        </div>
      ) : (
        <div className={styles.ProfileInputContainer}>
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={statusChange}
            autoFocus={true}
            className={styles.ProfileInput}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
