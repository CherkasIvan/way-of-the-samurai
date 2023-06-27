import React, {FC} from "react";
import classes from "./AddPost.module.scss";
import { IDialog } from "../../main-content/models/dialog.interface";
import { IMessage } from "../../main-content/models/messages.interface";

interface IAddPost {
 data: IDialog[] | IMessage[]
 textAreaLabel: string
}

const AddTextAreaMessage: FC<IAddPost> = ({data, textAreaLabel}) => {

const adMessage = () =>{

}

  return (
    <div className={classes.AddPostContainer}>
      <textarea></textarea>
      <button  onClick={adMessage}>Add new {textAreaLabel}</button>
    </div>
  );
};

export default AddTextAreaMessage;
