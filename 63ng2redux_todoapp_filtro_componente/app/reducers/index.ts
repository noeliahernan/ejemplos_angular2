import { combineReducers } from 'redux';
import { todoReducer, ITodo } from './todo.reducer';
import { visibilityFilter } from './visibility-filter.reducer';

export interface IAppState
{
    todos?: ITodo[];
    visibilityFilter?: any
}

export const rootReducer = combineReducers<IAppState>({
    todos: todoReducer,
    visibilityFilter: visibilityFilter
});