import React, { FC } from "react";
import classes from "./Dialogs.module.scss";
import User from "./components/user/User";
import Message from "./components/message/Message";
import { IMessage } from "../../../../models/message.interface";
import { IUsers } from "../../../../models/users.interface";
import AddTextAreaMessage from "../../../../../shared/add-post/AddTextAreaMessage";
import { IActionType } from "../../../../../../redux/store";

interface IPostsProps {
  usersData: IUsers[],
  messagesData: IMessage[],
  dispatch: IActionType
}

const Dialogs: FC<IPostsProps> = ({ usersData, messagesData, dispatch }) => {
  const users = usersData.map((el) => (
    <User
      name={el.name}
      id={el.id}
      key={el.id}
    ></User>
  ));
  const messages = messagesData.map((el) => (
    <Message message={el.message}></Message>
  ));
  return (
    <div className={classes.dialogsContainer}>
      <div className={classes.users}>{users}</div>
      <div className={classes.messages}>{messages}</div>
      <AddTextAreaMessage  
      textAreaLabel="message"/>
    </div>
  );
};

export default Dialogs;
