import React from "react";
import classes from "./Dialogs.module.scss";
import User from "./components/user/User.tsx";

const Dialogs = ({ dialogsData }) => {
  const dialogs = dialogsData.map((el, index) => (
    <User
      message={el.message}
      name={el.name}
      id={el.id}
      key={el.id}
    ></User>
  ));
  return (
    <div className={classes.dialogsContainer}>
      {dialogs}
    </div>
  );
};

export default Dialogs;
