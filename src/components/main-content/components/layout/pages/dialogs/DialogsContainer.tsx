import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import Dialogs from './Dialogs'
import { UpdateMessageAC, AddMessageAC } from '../../../../../../redux/actions/actions'

const mapStateToProps = (state: IState) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {
  updatedMessageTextHandler: UpdateMessageAC,
  addMessageTextHandler: AddMessageAC,
})(Dialogs)
