import { getMe } from '../../api/api'
import { SetUserDataAC } from '../actions/actions'

export const getMeTC = () => {
  return (dispatch: any) => {
    getMe().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data
        dispatch(SetUserDataAC(id, email, login))
      }
    })
  }
}
