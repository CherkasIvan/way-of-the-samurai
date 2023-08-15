import React, { Component } from 'react'
import axios from 'axios'
import CurrentProfile from './CurrentProfile'
import { IProfilePage } from '../../../../../../../../utils/models/profile-page.interface'

interface ICurrentProfileClassProps {
  profilePage: IProfilePage
  userId: number
  toggleIsFetching: (isFetching: boolean) => void
}

export default class CurrentProfileClassContainer extends React.Component<ICurrentProfileClassProps> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true)
    const profile = '/profile'
    const userId = `/${this.props.userId}`
    axios
      .get('https://social-network.samuraijs.com/api/1.0' + profile + `/${userId}`)
      .then((response) => {
        console.log(response)
        // setUsers(response.data.items)
        this.props.toggleIsFetching(false)
      })
  }

  render(): React.ReactNode {
    return (
      <div>
        <CurrentProfile fullName={this.props.profilePage.posts[0].name} />
      </div>
    )
  }
}
