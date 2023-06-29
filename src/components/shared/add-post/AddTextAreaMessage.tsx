import {FC, SetStateAction, useRef, useState} from "react";
import classes from "./AddPost.module.scss";
import { State } from "../../../redux/state";
import { rendererEntireTree } from "../../../utils/rerender/rerender";
import React from "react";
import { addMessage } from "../../../utils/functions/add-message";

interface IAddPost {
 textAreaLabel: string
 page: string,
}

const AddTextAreaMessage: FC<IAddPost> = ({ textAreaLabel, page }) => {
  const [message, setMessage] = useState('');
  const handleMessageChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };

  let newMessageRef =  React.createRef<HTMLTextAreaElement>()

  const addNewMessage = () => {
    const actualMessages = addMessage(message,page)
    rendererEntireTree(State)
    newMessageRef.current?.remove()
  }

  const updateMessage = (text:string) => {
    const actualMessages = addMessage(message,page)
    rendererEntireTree(State)
  }

  return (
    <div className={classes.AddPostContainer}>
      <textarea  
        ref={newMessageRef}       
        value={message}
        onChange={handleMessageChange}>
      </textarea>
      <button  onClick={addNewMessage}>Add new {textAreaLabel}</button>
    </div>
  );
};
export default AddTextAreaMessage;
