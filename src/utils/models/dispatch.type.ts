import { IAction } from './action.interface';

export type IDispatch = (arg: IAction) => IAction;