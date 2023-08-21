import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { IState } from '../main-content/models/state.interface'
import { SetUserDataAC } from '../../redux/actions/actions'
import { getMe } from '../../api/api'

export interface IHeaderContainerProps {
  isAuth: boolean
  login: string | null
  authUser: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {
  componentDidMount(): void {
    getMe().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data
        this.props.authUser(id, email, login)
      }
    })
  }

  render(): React.ReactNode {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: IState) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, {
  authUser: SetUserDataAC,
})(HeaderContainer)
