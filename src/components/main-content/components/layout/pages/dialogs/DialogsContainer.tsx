import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import Dialogs from './Dialogs'
import {
  UpdateMessageActionCreator,
  AddMessageActionCreator,
} from '../../../../../../redux/actions/actions'

const mapStateToProps = (state: IState) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default connect(mapStateToProps, {
  updatedMessageTextHandler: UpdateMessageActionCreator,
  addMessageTextHandler: AddMessageActionCreator,
})(Dialogs)
