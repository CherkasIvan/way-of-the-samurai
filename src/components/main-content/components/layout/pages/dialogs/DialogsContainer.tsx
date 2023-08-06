
import { AddMessageActionCreator, UpdateMessageActionCreator } from "../../../../../../redux/actions";
import { connect } from "react-redux";
import { IState } from "../../../../models/state.interface";
import Dialogs from "./Dialogs";
import { IAction } from "../../../../../../utils/models/action.interface";


let mapStateToProps = (state: IState) => {return {
  dialogsPage: state.dialogsPage
}}
let mapDispatchToProps = (dispatch: (arg0: IAction) => void) => {
  return {
    updateddMesageTextHeandler: (text: string) => {
      let action = UpdateMessageActionCreator(text)
      dispatch(action)
    },
    addMessageTextHandler: (text: string) => {    
      let action = AddMessageActionCreator(text)
      dispatch(action)},
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
