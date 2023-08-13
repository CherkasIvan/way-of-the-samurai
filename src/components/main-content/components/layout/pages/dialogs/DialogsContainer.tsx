import {
  AddMessageActionCreator,
  UpdateMessageActionCreator,
} from '../../../../../../redux/actions'
import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import Dialogs from './Dialogs'

const mapStateToProps = (state: IState) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default connect(mapStateToProps, {
  updatedMessageTextHandler: UpdateMessageActionCreator,
  addMessageTextHandler: AddMessageActionCreator,
})(Dialogs)
