import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import { UpdateMessageAC, AddMessageAC } from '../../../../../../redux/actions/actions'
import { withAuthRedirect } from '../../../../../shared/redirect/RedirectComponents'
import Dialogs from './Dialogs'

const mapStateToProps = (state: IState) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, {
  updatedMessageTextHandler: UpdateMessageAC,
  addMessageTextHandler: AddMessageAC,
})(AuthRedirectComponent)
