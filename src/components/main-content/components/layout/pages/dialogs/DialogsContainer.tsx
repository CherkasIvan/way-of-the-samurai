import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import { UpdateMessageAC, AddMessageAC } from '../../../../../../redux/actions/actions'
import { withAuthRedirect } from '../../../../../shared/redirect/RedirectComponents'
import Dialogs from './Dialogs'
import { compose } from 'redux'

const mapStateToProps = (state: IState) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose(
  connect(mapStateToProps, {
    updatedMessageTextHandler: UpdateMessageAC,
    addMessageTextHandler: AddMessageAC,
  }),
  withAuthRedirect,
)(Dialogs)
