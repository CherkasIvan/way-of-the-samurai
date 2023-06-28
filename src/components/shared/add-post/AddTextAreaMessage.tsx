import {FC, SetStateAction, useState} from "react";
import classes from "./AddPost.module.scss";
import { addMessage } from "../../../utils/data/state";

interface IAddPost {
 textAreaLabel: string
 page: string
}

const AddTextAreaMessage: FC<IAddPost> = ({ textAreaLabel, page}) => {
  const [message, setMessage] = useState('');
  const handleMessageChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };

  const addNewMessage = () => {
    addMessage(message,page)}
  return (
    <div className={classes.AddPostContainer}>
      <textarea         
        value={message}
        onChange={handleMessageChange}>
      </textarea>
      <button  onClick={addNewMessage}>Add new {textAreaLabel}</button>
    </div>
  );
};

export default AddTextAreaMessage;
