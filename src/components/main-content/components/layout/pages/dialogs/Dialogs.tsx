import React from "react";
import classes from "./Dialogs.module.scss";
import User from "./components/user/User.tsx";
import Message from "./components/message/Message.tsx";

const Dialogs = ({ usersData, messagesData }) => {
  const users = usersData.map((el, index) => (
    <User
      message={el.message}
      name={el.name}
      id={el.id}
      key={el.id}
    ></User>
  ));
  const messages = messagesData.map((el, index) => (
    <Message text={el.message}></Message>
  ));
  return (
    <div className={classes.dialogsContainer}>
      <div className={classes.users}>{users}</div>
      <div className={classes.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
