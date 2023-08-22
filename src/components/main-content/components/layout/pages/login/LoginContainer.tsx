import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import { UpdateMessageAC, AddMessageAC } from '../../../../../../redux/actions/actions'
import Login from './Login'

const mapStateToProps = (state: IState) => {
  return {
    loginPage: state.loginPage,
  }
}

export default connect(mapStateToProps, {
  updatedMessageTextHandler: UpdateMessageAC,
  addMessageTextHandler: AddMessageAC,
})(Login)
