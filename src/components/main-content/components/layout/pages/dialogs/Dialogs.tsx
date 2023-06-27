import React, { FC } from "react";
import classes from "./Dialogs.module.scss";
import User from "./components/user/User";
import Message from "./components/message/Message";
import { IMessage } from "../../../../models/messages.interface";
import { IUsers } from "../../../../models/users.interface";
import AddTextAreaMessage from "../../../../../shared/add-post/AddTextAreaMessage";

interface IDialogsProps {
  usersData: IUsers[],
  messagesData: IMessage[]
}

const Dialogs: FC<IDialogsProps> = ({ usersData, messagesData }) => {
  const users = usersData.map((el, index) => (
    <User
      name={el.name}
      id={el.id}
      key={el.id}
    ></User>
  ));
  const messages = messagesData.map((el, index) => (
    <Message text={el.text}></Message>
  ));
  return (
    <div className={classes.dialogsContainer}>
      <div className={classes.users}>{users}</div>
      <div className={classes.messages}>{messages}</div>
      <AddTextAreaMessage data={users} textAreaLabel="post"/>
    </div>
  );
};

export default Dialogs;
