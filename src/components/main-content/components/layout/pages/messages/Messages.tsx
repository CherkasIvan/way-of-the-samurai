import React from "react";
import classes from "./Messages.module.scss";
import { NavLink } from "react-router-dom";

const Messages = () => {
  return (
    <div className={classes.messagesContainer}>
      <div className={classes.messageName}>
        <div
          className={
            classes.messageNameItem + " " + classes.active
          }
        >
          <NavLink to="3">Dima</NavLink>
        </div>
        <div className={classes.messageNameItem}>
          <NavLink to="4">Sasha</NavLink>
        </div>
        <div className={classes.messageNameItem}>
          <NavLink to="5">Andrey</NavLink>
        </div>
        <div className={classes.messageNameItem}>
          <NavLink to="7">Julia</NavLink>
        </div>
        <div className={classes.messageNameItem}>
          <NavLink to="6">Dima</NavLink>
        </div>
      </div>
      <div className={classes.messageText}>
        <p className={classes.messageTextItem}>sdfsdf</p>
        <p className={classes.messageTextItem}>
          sdfdsvgdfh
        </p>
        <p className={classes.messageTextItem}>1234rweg</p>
        <p className={classes.messageTextItem}>
          brenjytkjhtrdf
        </p>
        <p className={classes.messageTextItem}>
          ewftghjytuyew
        </p>
      </div>
    </div>
  );
};

export default Messages;
