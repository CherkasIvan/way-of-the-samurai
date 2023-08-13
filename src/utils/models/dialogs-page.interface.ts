import { IMessage } from '../../components/main-content/models/message.interface';
import { IUser } from '../../components/main-content/models/user.interface';

export interface IDialogsPage {
  users: IUser[];
  messages: IMessage[];
  newMessageText: string;
}
