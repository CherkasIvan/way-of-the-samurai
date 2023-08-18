import { StoreEnum } from '../../utils/enums/store.enum'
import { IAction } from '../../utils/models/action.interface'
import { IAuth } from '../../utils/models/auth.interface'

const initialState: IAuth = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state: any = initialState, action: IAction): IAuth => {
	switch (action.type) {
		case StoreEnum.SET_USER_DATA: {
			return { ...state, ...state.payload, isAuth: true }
		}
		default:
			return state
	}
}

export default authReducer
