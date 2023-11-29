import { profileApi } from '../../api/api';
import { IDispatch } from '../../utils/models/dispatch.type';
import {
  GetProfileStatusAC,
  SavePhotoSuccessAC,
  SetPreloaderAC,
  SetProfileAC,
  SetMyProfileAC,
  UpdateMyStatusAC
} from '../actions/actions';

export const getProfileTC = (router: any) => {
  return (dispatch: IDispatch) => {
    dispatch(SetPreloaderAC(true));
    const profile = '/profile';
    const userId = router.params.userId;
    const authorizedUserId = userId;
    if (!authorizedUserId) {
      history.pushState({}, 'login');
    }

    !userId
      ? profileApi.getUsersProfile(profile, '29840').then((response) => {
          dispatch(SetProfileAC(response.data));
          dispatch(SetMyProfileAC(response.data));
          dispatch(SetPreloaderAC(false));
        })
      : profileApi.getUsersProfile(profile, userId).then((response) => {
          dispatch(SetProfileAC(response.data));
          dispatch(SetPreloaderAC(false));
        });
  };
};

export const getProfileStatusTC = (router: any) => {
  return (dispatch: IDispatch) => {
    dispatch(SetPreloaderAC(true));
    const profileStatus = '/profile/status';
    const userId = router.params.userId;
    !userId
      ? profileApi
          .getUsersProfileStatus(profileStatus, '29840')
          .then((response) => {
            dispatch(GetProfileStatusAC(response.data));
            dispatch(SetPreloaderAC(false));
          })
      : profileApi
          .getUsersProfileStatus(profileStatus, userId)
          .then((response) => {
            dispatch(GetProfileStatusAC(response.data));
            dispatch(SetPreloaderAC(false));
          });
  };
};

export const updateMyStatusTC = (message: string) => {
  return (dispatch: IDispatch) => {
    dispatch(SetPreloaderAC(true));
    const profileStatus = '/profile/status';
    profileApi
      .updateMyProfileStatus(profileStatus, message)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(UpdateMyStatusAC(message));
          dispatch(SetPreloaderAC(false));
        }
      });
  };
};

export const savePhotoTC = (file: any) => {
  return (dispatch: IDispatch) => {
    dispatch(SetPreloaderAC(true));
    const profilePhoto = '/profile/photo';
    profileApi.savePhoto(profilePhoto, file).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(SavePhotoSuccessAC(file));
        dispatch(SetPreloaderAC(false));
      }
    });
  };
};
