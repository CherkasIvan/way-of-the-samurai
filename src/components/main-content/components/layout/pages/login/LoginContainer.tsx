import { connect } from 'react-redux'
import { IState } from '../../../../models/state.interface'
import { AddMessageAC } from '../../../../../../redux/actions/actions'
import Login from './Login'

const mapStateToProps = (state: IState) => {
  return {
    loginPage: state.loginPage,
  }
}

export default connect(mapStateToProps, {
  addMessageTextHandler: AddMessageAC,
})(Login)
