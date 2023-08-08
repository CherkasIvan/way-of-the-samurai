import { IRoutes } from "../../components/main-content/models/routes.interface";
import { ActiveRoutes } from "../enums/active-routes.enum";

export const Routes: IRoutes[] = [
	{
		href: ActiveRoutes.PROFILE,
		label: "Profile",
	},
	{
		href: ActiveRoutes.USERS,
		label: "Users",
	},
	{
		href: ActiveRoutes.DIALOGS,
		label: "Dialogs",
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