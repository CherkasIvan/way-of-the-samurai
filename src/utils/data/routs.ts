import { IRoutes } from "../../components/main-content/models/navigation.interface";
import { ActiveRoutes } from "../enums/active-routes.enum.ts";

export const Routes: IRoutes[] = [
	{
		href: ActiveRoutes.PROFILE,
		label: "Profile",
	},
	{
		href: ActiveRoutes.MESSAGES,
		label: "Messages",
	},
	{
		href: ActiveRoutes.NEWS,
		label: "News",
	},
	{
		href: ActiveRoutes.MUSIC,
		label: "Music",
	},
	{
		href: ActiveRoutes.SETTINGS,
		label: "Settings",
	},
];