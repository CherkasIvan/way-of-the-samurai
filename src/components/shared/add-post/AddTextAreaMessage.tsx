import React, {FC, useState} from "react";
import classes from "./AddPost.module.scss";
import { IActionType } from "../../../redux/store";
import { AddPostActionCreator, AddMessageActionCreator, UpdatePostActionCreator, UpdateMessageActionCreator } from "../../../redux/actions";

interface IAddPost {
 textAreaLabel: string,
 dispatch: (action: IActionType) => void
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
