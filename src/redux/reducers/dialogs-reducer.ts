import { rendererEntireTree } from "../..";
import { IMessage } from "../../components/main-content/models/message.interface";
import { ActiveMessages } from "../../utils/data/active-messages";
import { ActiveUsers } from "../../utils/data/active-users";
import { StoreEnum } from "../../utils/enums/store.enum";
import { IAction } from "../../utils/models/action.interface";
import { IDialogsPage } from "../../utils/models/dialogs-page.interface";
import store from "../store";


let initialState = {
        users: ActiveUsers,
        messages: ActiveMessages,
        newMessageText: ''
}

const dialogsReducer = (state:IDialogsPage = initialState, action: IAction): IDialogsPage => {
    switch (action.type){
        case StoreEnum.ADD_MESSAGE: {
            const actualMessage: IMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            }
            state.messages.push(actualMessage)
            state.newMessageText=''
            rendererEntireTree(store.getState()) 
            return state
        }
        case StoreEnum.UPDATE_MESSAGE: {
            state.newMessageText= action.payload
            return state
        }
        default: return state
    }
}

export default dialogsReducer