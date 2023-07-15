import React, { FC } from "react";
import classes from "./ProfileInfo.module.scss";
import ProfileInfo from "./ProfileInfo";

interface IProfileInfoContainerProps {
  message: string;
  name: string;
}

const ProfileInfoContainer: FC<IProfileInfoContainerProps> = ({
  message,
  name,
}) => {
  return (<ProfileInfo message={message} name={name}/>);
};

export default ProfileInfoContainer;
