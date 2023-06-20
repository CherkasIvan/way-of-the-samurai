import React from "react";
import classes from "./Dialogs.module.scss";
import User from "./components/user/User.tsx";
import Message from "./components/message/Message.tsx";
import { Users } from "../../../../../../utils/data/users.ts";

const Dialogs = () => {
  const users = Users.map((el, index) => (
    <User
      message={el.message}
      name={el.name}
      id={el.id}
      key={el.id}
    ></User>
  ));
  return (
    <div className={classes.dialogsContainer}>{users}</div>
  );
};

export default Dialogs;
