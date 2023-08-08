export interface IUser {
	id: number,
	followed: boolean,
	photoUrl: string,
	name: string,
	status: string,
	location: { city: string, country: string },
	counter: number
}