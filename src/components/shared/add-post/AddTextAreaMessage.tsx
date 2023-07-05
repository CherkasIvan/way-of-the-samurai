import React, {FC, useState} from "react";
import classes from "./AddPost.module.scss";
import { StoreEnum } from "../../../utils/enums/store.enum";
import { IActionType } from "../../../redux/store";

interface IAddPost {
 textAreaLabel: string,
 newPostText: string,
 newMessageText: string,
 dispatch: (action: IActionType) => void
}

let AddPostActionCreator = () => {
  return {
    type: StoreEnum.ADD_POST
  }
}

let AddMessageActionCreator = () => {
  return {
    type: StoreEnum.ADD_MESSAGE
  }
}

let UpdatePostActionCreator = (message:string) => {
  return {
    type: StoreEnum.UPDATE_NEW_POST_TEXT,
    payload: message
  }
}

let UpdateMessageActionCreator = (message:string) => {
  return {
    type: StoreEnum.UPDATE_MESSAGE,
    payload: message
  }
}

const AddTextAreaMessage: FC<IAddPost> = ({ textAreaLabel,  dispatch, }) => {;
  const [message, setMessage] = useState('');

  const addNewMessage = () => {
    textAreaLabel==='post' ? dispatch(AddPostActionCreator()) : dispatch(AddMessageActionCreator())
  }

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    textAreaLabel==='post' ? dispatch(UpdatePostActionCreator(message)) : dispatch(UpdateMessageActionCreator(message))
  }

  return (
    <div className={classes.AddPostContainer}>
      <textarea  
        value={message}
        onChange={onMessageChange}>
      </textarea>
      <button  onClick={addNewMessage}>Add new {textAreaLabel}</button>
    </div>
  );
};
export default AddTextAreaMessage;
