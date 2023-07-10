import React, { FC } from "react";
import classes from "./Dialogs.module.scss";
import User from "./components/user/User";
import Message from "./components/message/Message";
import { IMessage } from "../../../../models/message.interface";
import { IUsers } from "../../../../models/users.interface";
import AddTextAreaMessage from "../../../../../shared/add-post/AddTextAreaMessage";
import { IAction } from "../../../../../../utils/models/action.interface";
import { AddMessageActionCreator, UpdateMessageActionCreator } from "../../../../../../redux/actions";

interface IPostsProps {
    usersData: IUsers[],
    messagesData: IMessage[],
    dispatch: (action: IAction) => void
}

const Dialogs: FC<IPostsProps> = ({ usersData, messagesData, dispatch}) => {
  const updateaddMesageTexttHeandler = (text: string) => {
    let action = UpdateMessageActionCreator(text)
    dispatch(action)
  }
  
  const addaddMesageTextHeandler = () => {
    let action = AddMessageActionCreator()
    dispatch(action)
  }

  const users = usersData.map((el) => (
    <User
      name={el.name}
      id={el.id}
      key={el.id}
    ></User>
  ));
  const messages = messagesData.map((el) => (
    <Message message={el.message} key={el.id}></Message>
  ));
  return (
    <div className={classes.dialogsContainer}>
      <div className={classes.users}>{users}</div>
      <div className={classes.messages}>{messages}</div>
      <AddTextAreaMessage  
        textAreaLabel="message"
        addMesageText={addaddMesageTextHeandler}
        updateNewMesageText={updateaddMesageTexttHeandler}/>
    </div>
  );
};

export default Dialogs;
