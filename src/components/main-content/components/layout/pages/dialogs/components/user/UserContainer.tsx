import React, { FC } from 'react';
import User from './User';

export interface IUserContainerProps {
  id: number;
  name: string;
}

const UserContainer: FC<IUserContainerProps> = ({ id, name }) => {
  return (
    <User
      id={id}
      name={name}
    />
  );
};

export default UserContainer;
