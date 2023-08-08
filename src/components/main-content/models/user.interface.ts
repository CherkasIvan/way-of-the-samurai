export interface IUser {
	id: number,
	followed: boolean,
	photoUrl: string,
	fullName: string,
	status: string,
	location: { city: string, country: string },
	counter: number
}