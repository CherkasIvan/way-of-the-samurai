import React from 'react'
import styles from './ProfileStatus.module.scss'

interface IProfileStatusProps {
  status: string
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

  activateEditMode = () => {
    this.setState(() => ({
      editMode: true,
    }))
  }

  deactivateEditMode = () => {
    this.setState(() => ({
      editMode: false,
    }))
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
              value={this.props.status}
              className={styles.ProfileInput}
            />
          </div>
        )}
      </>
    )
  }
}

export default ProfileStatus
