import React, { FC } from "react";
import classes from "./Dialogs.module.scss";
import AddTextAreaMessage from "../../../../../shared/add-post/AddTextAreaMessage";
import { AddMessageActionCreator, UpdateMessageActionCreator } from "../../../../../../redux/actions";
import { connect } from "react-redux";
import { IAction } from "../../../../../../utils/models/action.interface";
import { IState } from "../../../../models/state.interface";
import UserContainer from "./components/user/UserContainer";
import MessageContainer from "./components/message/MessageContainer";
import { IDialogsPage } from "../../../../../../utils/models/dialogs-page.interface";

interface IDialogsProps {
    dialogsPage: IDialogsPage
    updateddMesageTextHandler: (text:string) => void,
    addMessageTextHandler: (text:string) => void
}

const Dialogs: FC<IDialogsProps> = ({ dialogsPage, updateddMesageTextHandler, addMessageTextHandler}) => {
  const users = dialogsPage.users.map((el) => (
    <UserContainer
      name={el.fullName}
      id={el.id}
      key={el.id}
    ></UserContainer>
  ));
  const messages = dialogsPage.messages.map((el) => (
    <MessageContainer message={el.message} key={el.id}></MessageContainer>
  ));
  return (
    <div className={classes.dialogsContainer}>
      <div className={classes.users}>{users}</div>
      <div className={classes.messages}>{messages}</div>
      <AddTextAreaMessage  
        textAreaLabel="message"
        addMessageText={addMessageTextHandler}
        updateNewMessageText={updateddMesageTextHandler}/>
    </div>
  );
};

let mapStateToProps = (state: IState) => {}
let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
  return {
    addPostText: (text:string) => {
      let action = AddMessageActionCreator(text)
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
