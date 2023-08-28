import React, { LegacyRef } from 'react'
import styles from './ProfileStatus.module.scss'

interface IProfileStatusProps {
  status: string
  updateMyStatusTC: (message: string) => any
}

interface IState {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<IProfileStatusProps, IState> {
  constructor(props: IProfileStatusProps) {
    super(props)

    this.state = {
      editMode: false,
      status: this.props.status,
    }
  }
  activateEditMode = () => {
    this.setState(() => ({
      editMode: true,
    }))
  }

  onStatusChange = (e: any) => {
    this.setState(() => ({
      status: e.target.value,
    }))
  }

  componentDidUpdate(prevProps: Readonly<IProfileStatusProps>): void {
    if (prevProps !== this.props) {
      this.setState(() => ({
        status: this.props.status,
      }))
    }
  }

  deactivateEditMode = () => {
    this.setState(() => ({
      editMode: false,
    }))
    this.props.updateMyStatusTC(this.state.status)
  }

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div className={styles.ProfileStatusContainer}>
            <span onDoubleClick={this.activateEditMode} className={styles.ProfileActualStatus}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div className={styles.ProfileInputContainer}>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              onChange={this.onStatusChange}
              value={this.state.status}
              className={styles.ProfileInput}
            />
          </div>
        )}
      </>
    )
  }
}

export default ProfileStatus
