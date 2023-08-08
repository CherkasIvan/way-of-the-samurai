import { IUser } from "../../components/main-content/models/user.interface";

export const ActiveUsers: IUser[] = [
		{
			id: 1,
			followed: false,
			photoUrl: 'https://proprikol.ru/wp-content/uploads/2021/01/krasivye-kartinki-sobak-5.jpg',
			fullName: 'Ivan',
			status: 'active',
			location: {city: 'Minsk', country: 'Belarus'},
			counter: 1
		},
		{
			id: 2,
			followed: false,
			photoUrl: 'https://i.pinimg.com/originals/31/35/60/313560be5fc96228cca23d7b2c661ff9.jpgs',
			fullName: "Alisa",
			status: 'active',
			location: {city: 'Kiev', country: 'Ukraine'},
			counter: 3
		},
		{
			id: 3,
			followed: true,
			photoUrl: 'https://zooclub.ru/attach/10000/10237.jpg',
			fullName: "Veronica",
			status: 'active',
			location: {city: 'Moscow', country: 'Russia'},
			counter: 0
		},
		{
			id: 4,
			followed: true,
			photoUrl: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666249910_47-mykaleidoscope-ru-p-otkritki-s-zhivotnimi-krasivie-i-smeshnie-47.jpg',
			fullName: "Andrey",
			status: 'active',
			location: {city: 'Minsk', country: 'Belarus'},
			counter: 12
		},
		{
			id: 5,
			followed: true,
			photoUrl: 'https://klike.net/uploads/posts/2023-02/1675404188_3-27.jpg',
			fullName: 'Sergeiy',
			status: 'active',
			location: {city: 'London', country: 'Great Breton'},
			counter: 16
		},
	];