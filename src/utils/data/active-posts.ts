import { IPost } from "../../components/main-content/models/post.interface";

export const ActivePosts
	: IPost[] = [
		{
			id: 1,
			name: 'Ivan',
			message: "hi!",
			counter: 1
		},
		{
			id: 2,
			name: "Alisa",
			message: "helloe",
			counter: 3
		},
		{
			id: 3,
			name: "Veronica",
			message: "Good job",
			counter: 0
		},
		{
			id: 4,
			name: "Andrey",
			message: "Music is everething!",
			counter: 12
		},
		{
			id: 5,
			name: 'Sergeiy',
			message: "Car wash",
			counter: 16
		},
	];