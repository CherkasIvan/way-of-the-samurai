import { getProfile } from '../../api/api'
import { SetPreloaderAC, SetProfileAC } from '../actions/actions'

export const getProfileTC = (router: any) => {
  return (dispatch: any) => {
    dispatch(SetPreloaderAC(true))
    const profile = '/profile'
    let userId = router.params.userId
    !userId
      ? (userId = 2)
      : getProfile(profile, userId).then((response) => {
          dispatch(SetProfileAC(response.data))
          dispatch(SetPreloaderAC(false))
        })
  }
}
