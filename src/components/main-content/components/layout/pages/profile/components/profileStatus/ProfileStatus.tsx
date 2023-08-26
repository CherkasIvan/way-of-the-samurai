import React, { LegacyRef } from 'react'
import styles from './ProfileStatus.module.scss'

interface IProfileStatusProps {
  status: string
  updateMyStatusTC: (message: string) => any
}

interface IState {
  editMode: boolean
}

class ProfileStatus extends React.Component<IProfileStatusProps, IState> {
  constructor(props: IProfileStatusProps) {
    super(props)

    this.state = {
      editMode: false,
    }
  }
  statusInputRef: any = React.createRef()
  activateEditMode = () => {
    this.setState(() => ({
      editMode: true,
    }))
  }

  deactivateEditMode = () => {
    const newStatusMessage = this.statusInputRef.current.value
    this.setState(() => ({
      editMode: false,
    }))
    this.props.updateMyStatusTC(newStatusMessage)
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
              ref={this.statusInputRef}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              defaultValue={this.props.status}
              className={styles.ProfileInput}
            />
          </div>
        )}
      </>
    )
  }
}

export default ProfileStatus
