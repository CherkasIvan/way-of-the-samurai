import { IUser } from "../../components/main-content/models/user.interface";

export const ActiveUsers: IUser[] = [
		{
			id: 1,
			followed: false,
			fullName: 'Ivan',
			status: 'active',
			location: {city: 'Minsk', country: 'Belarus'},
			counter: 1
		},
		{
			id: 2,
			followed: false,
			fullName: "Alisa",
			status: 'active',
			location: {city: 'Kiev', country: 'Ukraine'},
			counter: 3
		},
		{
			id: 3,
			followed: true,
			fullName: "Veronica",
			status: 'active',
			location: {city: 'Moscow', country: 'Russia'},
			counter: 0
		},
		{
			id: 4,
			followed: true,
			fullName: "Andrey",
			status: 'active',
			location: {city: 'Minsk', country: 'Belarus'},
			counter: 12
		},
		{
			id: 5,
			followed: true,
			fullName: 'Sergeiy',
			status: 'active',
			location: {city: 'London', country: 'Great Breton'},
			counter: 16
		},
	];