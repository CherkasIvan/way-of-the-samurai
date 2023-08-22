import { connect } from 'react-redux'
import Navigation from './Navigation'
import { IState } from '../../models/state.interface'

const mapStateToProps = (state: IState) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {})(Navigation)
