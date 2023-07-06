import React, {FC, useRef} from "react";
import classes from "./AddPost.module.scss";
import { AddPostActionCreator, AddMessageActionCreator, 
UpdatePostActionCreator, UpdateMessageActionCreator } from "../../../redux/actions";
import { IAction } from "../../../utils/models/action.interface";

interface IAddPost {
 textAreaLabel: string,
 dispatch: (action: IAction) => void
}

const AddTextAreaMessage: FC<IAddPost> = ({ textAreaLabel,  dispatch, }) => {;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addNewMessage = () => {
    textAreaLabel==='post' ? dispatch(AddPostActionCreator()) : dispatch(AddMessageActionCreator())
  }

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    let newMessage = textareaRef.current?.value
    textAreaLabel==='post' ? dispatch(UpdatePostActionCreator(newMessage!)) : dispatch(UpdateMessageActionCreator(newMessage!))
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
