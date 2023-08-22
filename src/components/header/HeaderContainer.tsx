import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { IState } from '../main-content/models/state.interface'
import { getMeTC } from '../../redux/thunk/auth-thunk'

export interface IHeaderContainerProps {
  isAuth: boolean
  login: string | null
  getMeTC: () => any
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {
  componentDidMount(): void {
    this.props.getMeTC()
  }

  render(): React.ReactNode {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: IState) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { getMeTC: getMeTC })(HeaderContainer)
