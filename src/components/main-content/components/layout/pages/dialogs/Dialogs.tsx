import { FC } from 'react';
import classes from './Dialogs.module.scss';
import UserContainer from './components/user/UserContainer';
import MessageContainer from './components/message/MessageContainer';
import { IDialogsPage } from '../../../../../../utils/models/dialogs-page.interface';
import { Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../../../../../utils/enums/active-routes.enum';
import AddTextAreaMessageReduxForm from '../../../../../shared/add-message/AddTextAreaMessage';

interface IDialogsProps {
  dialogsPage: IDialogsPage;
  isAuth: boolean;
  updatedMessageTextHandler: (text: string) => void;
  addMessageText: (text: string) => void;
}

const Dialogs: FC<IDialogsProps> = ({
  dialogsPage,
  isAuth,
  addMessageText
}) => {
  const users = dialogsPage.users.map((el) => (
    <UserContainer
      name={el.name}
      id={el.id}
      key={el.id}></UserContainer>
  ));
  const messages = dialogsPage.messages.map((el) => (
    <MessageContainer
      message={el.message}
      key={el.id}></MessageContainer>
  ));

  const handleSubmit = (formData: any) => {
    addMessageText(formData.newMessageBody);
  };

  return !isAuth ? (
    <Navigate to={ActiveRoutes.LOGIN} />
  ) : (
    <div className={classes.dialogsContainer}>
      <div className={classes.users}>{users}</div>
      <div className={classes.messages}>{messages}</div>
      <AddTextAreaMessageReduxForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Dialogs;
