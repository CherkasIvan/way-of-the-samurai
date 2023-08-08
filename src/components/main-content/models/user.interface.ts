export interface IUser {
	id: number,
	followed: boolean,
	fullName: string,
	status: string,
	location: { city: string, country: string },
	counter: number
}