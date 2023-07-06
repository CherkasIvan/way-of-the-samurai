import { IMessage } from "../../components/main-content/models/message.interface";
import { IPost } from "../../components/main-content/models/post.interface";
import { IUsers } from "../../components/main-content/models/users.interface";

export interface IDialogsPage {
    users: IUsers[],
    messages: IMessage[],
    newMessageText: string
}