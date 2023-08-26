import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: { 'API-KEY': '74eec926-80fb-473b-9e58-ad114bf47bb4' },
})

export const authApi = {
  getMe() {
    const auth = '/auth/me'
    return instance.get(auth)
  },
}

export const usersApi = {
  getUsers(users: string, page: string, pageSize: string) {
    return instance.get(users + page + pageSize)
  },

  subscribeUsersProfile(userId: number) {
    return instance.post(`/follow/${userId}`)
  },

  unsubscribeUsersProfile(userId: number) {
    return instance.delete(`/follow/${userId}`)
  },
}

export const profileApi = {
  getUsersProfile(profile: string, userId: string) {
    return instance.get(profile + '/' + userId)
  },

  getUsersProfileStatus(profileStatus: string, userId: string) {
    return instance.get(profileStatus + '/' + userId)
  },

  updateMyProfileStatus(profileStatus: string, status: string) {
    return instance.put(profileStatus, { status: status })
  },
}
