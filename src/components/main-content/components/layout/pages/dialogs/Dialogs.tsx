import React, { FC } from "react";
import classes from "./Dialogs.module.scss";
import User from "./components/user/User";
import Message from "./components/message/Message";
import { IMessage } from "../../../../models/message.interface";
import { IUsers } from "../../../../models/users.interface";
import AddTextAreaMessage from "../../../../../shared/add-post/AddTextAreaMessage";
import { AddMessageActionCreator, UpdateMessageActionCreator } from "../../../../../../redux/actions";
import store from "../../../../../../redux-store/redux-store";
import { connect } from "react-redux";
import { IAction } from "../../../../../../utils/models/action.interface";
import { IState } from "../../../../models/state.interface";

interface IDialogsProps {
    usersData: IUsers[],
    messagesData: IMessage[],
}

const Dialogs: FC<IDialogsProps> = ({ usersData, messagesData}) => {
  const updateddMesageTextHeandler = (text: string) => {
    let action = UpdateMessageActionCreator(text)
    store.dispatch(action)
  }
  
  const addMesageTextHeandler = () => {
    let action = AddMessageActionCreator()
    store.dispatch(action)
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
        addMesageText={addMesageTextHeandler}
        updateNewMesageText={updateddMesageTextHeandler}/>
    </div>
  );
};

let mapStateToProps = (state: IState) => {}
let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
  return {
    addPostText: () => {
      let action = AddMessageActionCreator()
      dispatch(action)
    },
    updateNewPostText: (text: string) => {
      let action = UpdateMessageActionCreator(text)
      dispatch(action)
    }
  }
}

const PostTextAreaMessage = connect(mapStateToProps,mapDispatchToProps)(AddTextAreaMessage)

export default Dialogs;
