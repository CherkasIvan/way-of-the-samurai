import React from 'react'
import axios from 'axios'
import Header from './Header'
import { SetUserDataActionCreator } from '../../redux/actions'
import { connect } from 'react-redux'
import { IState } from '../main-content/models/state.interface'

export interface IHeaderContainerProps {
  isAuth: boolean
  login: string | null
  authUser: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<IHeaderContainerProps> {
  componentDidMount(): void {
    const auth = '/auth/me'
    axios
      .get('https://social-network.samuraijs.com/api/1.0' + auth, { withCredentials: true })
      .then((response: any) => {
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
  authUser: SetUserDataActionCreator,
})(HeaderContainer)
