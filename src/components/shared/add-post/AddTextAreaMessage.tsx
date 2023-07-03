import {FC} from "react";
import classes from "./AddPost.module.scss";
import React from "react";
import { IActionType } from "../../../redux/store";

interface IAddPost {
 textAreaLabel: string
 dispatch: IActionType
}

const AddTextAreaMessage: FC<IAddPost> = ({ textAreaLabel,  dispatch }) => {;
  let newMessageRef =  React.createRef<HTMLTextAreaElement>()

  const addNewMessage = () => {
    addMessageText(newMessageRef.current!.value)
  }

  const onMessageChange = () => {
    let text = newMessageRef.current!.value
    updateMessageText(text)
  }


  return (
    <div className={classes.AddPostContainer}>
      <textarea  
        ref={newMessageRef}       
        onChange={onMessageChange}>
      </textarea>
      <button  onClick={addNewMessage}>Add new {textAreaLabel}</button>
    </div>
  );
};
export default AddTextAreaMessage;
