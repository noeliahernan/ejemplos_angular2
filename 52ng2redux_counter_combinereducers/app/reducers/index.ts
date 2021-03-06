import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';

export interface IAppState{
    counter?: number
}

export const rootReducer = combineReducers<IAppState>({
    counter: counterReducer
})