import { IUser } from "../../components/main-content/models/user.interface";

export const ActiveUsers: IUser[] = [
		{
			id: 1,
			followed: false,
			photos: { 
				small: null, 
				large:  null
			},
			name: 'Ivan',
			status: 'active',
			uniqueUrlName: null,
			location: {city: 'Minsk', country: 'Belarus'},
			counter: 1
		},
		{
			id: 2,
			followed: false,
			photos: { 
				small: null, 
				large:  null
			},
			name: "Alisa",
			status: 'active',
			uniqueUrlName: null,
			location: {city: 'Kiev', country: 'Ukraine'},
			counter: 3
		},
		{
			id: 3,
			followed: true,
			photos: { 
				small: null, 
				large:  null
			},
			name: "Veronica",
			status: 'active',
			uniqueUrlName: null,
			location: {city: 'Moscow', country: 'Russia'},
			counter: 0
		},
		{
			id: 4,
			followed: true,
			photos: { 
				small: null, 
				large:  null
			},
			name: "Andrey",
			status: 'active',
			uniqueUrlName: null,
			location: {city: 'Minsk', country: 'Belarus'},
			counter: 12
		},
		{
			id: 5,
			followed: true,
			photos: { 
				small: null, 
				large:  null
			},
			name: 'Sergeiy',
			status: 'active',
			uniqueUrlName: null,
			location: {city: 'Minsk', country: 'Belarus'},
			counter: 16
		},
	];