import React, {FC} from "react";
import classes from "./User.module.scss";
import { NavLink } from "react-router-dom";
import { ActiveRoutes } from "../../../../../../../../utils/enums/active-routes.enum";
import User from "./User";

export interface IUserContainerProps {
  id: number;
  name: string;
}

const UserContainer: FC<IUserContainerProps> = ({ id, name }) => {
  return (<User id={id} name={name}/>);
};

export default UserContainer;
