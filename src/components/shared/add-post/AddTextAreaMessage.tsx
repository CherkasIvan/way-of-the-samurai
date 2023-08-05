import React, {FC, useRef} from "react";
import classes from "./AddPost.module.scss";

interface IAddPost {
 textAreaLabel: string,
 addPostText?: () => void,
 addMessageText?: () => void,
 updateNewPostText?: (text: string) => void,
 updateNewMessageText?: (text: string) => void,
}

const AddTextAreaMessage: FC<IAddPost> = ({ textAreaLabel,  addPostText, addMessageText, updateNewPostText, updateNewMessageText}) => {;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addNewMessage = () => {
    debugger
    textAreaLabel==='post' ? addPostText!() : addMessageText!()
  }

  const onMessageChange = (): void => {
    let newMessage = textareaRef.current?.value
    textAreaLabel==='post' ? updateNewPostText!(newMessage!) : updateNewMessageText!(newMessage!)
  }

  return (
    <div className={classes.AddPostContainer}>
      <textarea  
        value={textareaRef.current?.value}
        ref={textareaRef}
        onChange={onMessageChange}>
      </textarea>
      <button  onClick={addNewMessage}>Add new {textAreaLabel}</button>
    </div>
  );
};
export default AddTextAreaMessage;
