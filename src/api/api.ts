import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: { 'API-KEY': '74eec926-80fb-473b-9e58-ad114bf47bb4' },
})

export const getUsers = (users: string, page: string, pageSize: string) => {
	return instance
		.get(users + page + pageSize)
}

export const getProfile = (profile: string, userId: string) => {
	return instance
		.get(profile + '/' + userId)
}

export const subscribeUserApi = (userId: number) => {
	return instance
		.post(`/follow/${userId}`)
}

export const unsubscribeUserApi = (userId: number) => {
	return instance
		.delete(`/follow/${userId}`)
}

export const getMe = () => {
	const auth = '/auth/me'
	return instance
		.get(auth)
}