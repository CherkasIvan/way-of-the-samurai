import { FC } from 'react'
import classes from './Dialogs.module.scss'
import AddTextAreaMessage from '../../../../../shared/add-post/AddTextAreaMessage'
import UserContainer from './components/user/UserContainer'
import MessageContainer from './components/message/MessageContainer'
import { IDialogsPage } from '../../../../../../utils/models/dialogs-page.interface'

interface IDialogsProps {
  dialogsPage: IDialogsPage
  updatedMessageTextHandler: (text: string) => void
  addMessageTextHandler: (text: string) => void
}

const Dialogs: FC<IDialogsProps> = ({
  dialogsPage,
  updatedMessageTextHandler,
  addMessageTextHandler,
}) => {
  const users = dialogsPage.users.map((el) => (
    <UserContainer name={el.name} id={el.id} key={el.id}></UserContainer>
  ))
  const messages = dialogsPage.messages.map((el) => (
    <MessageContainer message={el.message} key={el.id}></MessageContainer>
  ))
  return (
    <div className={classes.dialogsContainer}>
      <div className={classes.users}>{users}</div>
      <div className={classes.messages}>{messages}</div>
      <AddTextAreaMessage
        textAreaLabel='message'
        addMessageText={addMessageTextHandler}
        updateNewMessageText={updatedMessageTextHandler}
      />
    </div>
  )
}

export default Dialogs
