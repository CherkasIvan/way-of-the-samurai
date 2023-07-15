import React, { FC } from "react";
import { IMessage } from "../../../../models/message.interface";
import { IUsers } from "../../../../models/users.interface";
import AddTextAreaMessage from "../../../../../shared/add-post/AddTextAreaMessage";
import { AddMessageActionCreator, UpdateMessageActionCreator } from "../../../../../../redux/actions";
import store from "../../../../../../redux-store/redux-store";
import { connect } from "react-redux";
import { IAction } from "../../../../../../utils/models/action.interface";
import { IState } from "../../../../models/state.interface";
import Dialogs from "./Dialogs";

interface IDialogsContainerProps {
    usersData: IUsers[],
    messagesData: IMessage[],
}

const DialogsContainer: FC<IDialogsContainerProps> = ({ usersData, messagesData}) => {
  const updateddMesageTextHeandler = (text: string) => {
    let action = UpdateMessageActionCreator(text)
    store.dispatch(action)
  }
  
  const addMesageTextHeandler = () => {
    let action = AddMessageActionCreator()
    store.dispatch(action)
  }
  return (<Dialogs usersData={usersData} messagesData={messagesData} 
    updateddMesageTextHeandler={updateddMesageTextHeandler} 
    addMesageTextHeandler={addMesageTextHeandler}/>);
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

export default DialogsContainer;
