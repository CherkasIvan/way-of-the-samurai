import { IUser } from '../../components/main-content/models/user.interface';
import { StoreEnum } from '../../utils/enums/store.enum';
import { IAction } from '../../utils/models/action.interface';
import { IUsersPage } from '../../utils/models/users-page.interface';

const initialState: IUsersPage = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
};

const usersReducer = (
	state: IUsersPage = initialState,
	action: IAction
): IUsersPage => {
	switch (action.type) {
		case StoreEnum.USER_SUBSCRIBE: {
			return {
				...state,
				users: state.users.map((user: IUser) => {
					if (user.id === action.payload) {
						return { ...user, followed: true };
					}
					return user;
				})
			};
		}
		case StoreEnum.USER_UNSUBSCRIBE: {
			return {
				...state,
				users: state.users.map((user: IUser) => {
					if (user.id === action.payload) {
						return { ...user, followed: false };
					}
					return user;
				})
			};
		}
		case StoreEnum.SET_USERS: {
			return {
				...state,
				users: [...action.payload]
			};
		}
		case StoreEnum.SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.payload };
		}
		case StoreEnum.SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.payload };
		}
		case StoreEnum.TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.payload };
		}
		case StoreEnum.TOGGLE_IS_SUBSCRIBING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.payload.isFetching
					? [...state.followingInProgress, action.payload.id]
					: state.followingInProgress.filter((userId: number) => {
						userId !== action.payload.id;
					})
			};
		}
		default:
			return state;
	}
};
export default usersReducer;
