import React, { FC } from "react";
import classes from "./Dialogs.module.scss";

import { IMessage } from "../../../../models/message.interface";
import { IUsers } from "../../../../models/users.interface";
import AddTextAreaMessage from "../../../../../shared/add-post/AddTextAreaMessage";
import { AddMessageActionCreator, UpdateMessageActionCreator } from "../../../../../../redux/actions";
import store from "../../../../../../redux-store/redux-store";
import { connect } from "react-redux";
import { IAction } from "../../../../../../utils/models/action.interface";
import { IState } from "../../../../models/state.interface";
import UserContainer from "./components/user/UserContainer";
import MessageContainer from "./components/message/MessageContainer";

interface IDialogsProps {
    usersData: IUsers[],
    messagesData: IMessage[],
    updateddMesageTextHeandler: (text:string) => void,
    addMesageTextHeandler: () => void
}

const Dialogs: FC<IDialogsProps> = ({ usersData, messagesData, updateddMesageTextHeandler, addMesageTextHeandler}) => {
  const users = usersData.map((el) => (
    <UserContainer
      name={el.name}
      id={el.id}
      key={el.id}
    ></UserContainer>
  ));
  const messages = messagesData.map((el) => (
    <MessageContainer message={el.message} key={el.id}></MessageContainer>
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
