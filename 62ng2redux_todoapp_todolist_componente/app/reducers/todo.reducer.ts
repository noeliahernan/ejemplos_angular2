import { TodoActions } from '../actions/todo.actions';

export interface ITodo 
{
    id: number;
    text: string;
    completed: boolean;
}

export function todoReducer(state: ITodo[] = [], action: any)
{
    switch(action.type){
        case TodoActions.ADD_TODO: {
            return [
                ...state,
                {
                    id: state.reduce((max, todo) => Math.max(todo.id, max), -1) + 1,
                    completed: false,
                    text: action.payload
                }
            ]
        }
        case TodoActions.TOGGLE_TODO: {
            return state.map(todo => {
                if(todo.id !== action.payload)
                {
                    return todo;
                }
                return Object.assign(todo, { completed: !todo.completed});
            })
        }
        case TodoActions.REMOVE_TODO: {
            return state.filter(todo => todo.id !== action.payload);
        }
        default: 
            return state;
    }
}