import React, {FC, useRef} from "react";
import classes from "./AddPost.module.scss";

interface IAddPost {
 textAreaLabel: string,
 addPostText?: () => void,
 addMesageText?: () => void,
 updateNewPostText?: (text: string) => void,
 updateNewMesageText?: (text: string) => void,
}

const AddTextAreaMessage: FC<IAddPost> = ({ textAreaLabel,  addPostText, addMesageText, updateNewPostText, updateNewMesageText}) => {;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addNewMessage = () => {
    textAreaLabel==='post' ? addPostText!() : addMesageText!()
  }

  const onMessageChange = (): void => {
    let newMessage = textareaRef.current?.value
    textAreaLabel==='post' ? updateNewPostText!(newMessage!) : updateNewMesageText!(newMessage!)
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
