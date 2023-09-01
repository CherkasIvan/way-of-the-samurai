import { IMessage } from '../../components/main-content/models/message.interface'
import { ActiveMessages } from '../../utils/data/active-messages'
import { ActiveUsers } from '../../utils/data/active-users'
import { StoreEnum } from '../../utils/enums/store.enum'
import { IAction } from '../../utils/models/action.interface'
import { IDialogsPage } from '../../utils/models/dialogs-page.interface'

const initialState: IDialogsPage = {
  users: ActiveUsers,
  messages: ActiveMessages,
}

const dialogsReducer = (state: IDialogsPage = initialState, action: IAction): IDialogsPage => {
  switch (action.type) {
    case StoreEnum.ADD_MESSAGE: {
      const actualMessage: IMessage = {
        id: state.messages.length + 1,
        message: action.payload,
      }
      const stateCopy = {
        ...state,
        messages: [...state.messages],
      }
      stateCopy.messages.push(actualMessage)
      return stateCopy
    }
    default:
      return state
  }
}

export default dialogsReducer
