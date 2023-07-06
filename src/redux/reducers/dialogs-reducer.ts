import { rendererEntireTree } from "../..";
import { IMessage } from "../../components/main-content/models/message.interface";
import { StoreEnum } from "../../utils/enums/store.enum";
import { IAction } from "../../utils/models/action.interface";
import { IDialogsPage } from "../../utils/models/dialogs-page.interface";
import store from "../store";

const dialogsReducer = (state:IDialogsPage, action: IAction): IDialogsPage => {
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