import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import Dialogs from './Dialogs'
import { UpdateMessageAC, AddMessageAC } from '../../../../../../redux/actions/actions'

const mapStateToProps = (state: IState) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default connect(mapStateToProps, {
  updatedMessageTextHandler: UpdateMessageAC,
  addMessageTextHandler: AddMessageAC,
})(Dialogs)
