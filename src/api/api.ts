import axios from 'axios';
import { ILoginPage } from '../utils/models/login-page.interface';
import { IProfileInformation } from '../components/main-content/models/profile-information.interface';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': '98330a8b-e309-4196-b8ef-590fa37e4e98',
    'Access-Control-Allow-Headers': '*'
  }
});

export const authApi = {
  login({ email, password, rememberMe = false, captcha }: ILoginPage) {
    const authMe = '/auth/login';
    const body = { email, password, rememberMe, captcha };
    return instance.post(authMe, body);
  },

  logout() {
    const disAuthMe = '/auth/login';
    return instance.delete(disAuthMe);
  },

  getMe() {
    const auth = '/auth/me';
    return instance.get(auth);
  }
};

export const usersApi = {
  getUsers(users: string, page: string, pageSize: string) {
    return instance.get(users + page + pageSize);
  },

  subscribeUsersProfile(userId: number) {
    return instance.post(`/follow/${userId}`);
  },

  unsubscribeUsersProfile(userId: number) {
    return instance.delete(`/follow/${userId}`);
  }
};

export const profileApi = {
  getUsersProfile(profile: string, userId: string) {
    return instance.get(profile + '/' + userId);
  },

  getUsersProfileStatus(profileStatus: string, userId: string) {
    return instance.get(profileStatus + '/' + userId);
  },

  updateMyProfileStatus(profileStatus: string, status: string) {
    return instance.put(profileStatus, { status: status });
  },

  savePhoto(profilePhoto: string, photo: Blob) {
    console.log(typeof photo);
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put(profilePhoto, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  saveProfile(updateProfileUrl: string, profile: IProfileInformation) {
    return instance.put(updateProfileUrl, profile);
  }
};

export const securityApi = {
  getCaptchaUrl(captchaUrl: string) {
    return instance.get(captchaUrl);
  }
};
