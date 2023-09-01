import { authApi } from '../../api/api'
import { SetAuthUserAC, SetUserDataAC } from '../actions/actions'

export const getMeTC = () => {
  return (dispatch: any) => {
    authApi.getMe().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data
        dispatch(SetUserDataAC(id, email, login))
      }
    })
  }
}

// export const getAuthTC = () => {
//   return (dispatch: any) => {
//     authApi.login().then((response) => {
//       if (response.data.resultCode === 0) {
//         const { id, login, email } = response.data.data
//         dispatch(SetAuthUserAC(id, email, login))
//       }
//     })
//   }
// }
