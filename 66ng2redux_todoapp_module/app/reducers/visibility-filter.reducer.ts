export const SHOW_COMPLETED: string = 'SHOW_COMPLETED';
export const SHOW_ACTIVE: string = 'SHOW_ACTIVE';
export const SHOW_ALL: string = 'SHOW_ALL';

export function visibilityFilter(state: any = t => t, action:any)
{
    console.log(action.type);
    switch(action.type)
    {
        case SHOW_COMPLETED: 
            return todo => todo.completed;
        case SHOW_ACTIVE:
            return todo => !todo.completed;
        case SHOW_ALL:
            return todo => todo;
        default:
            return state; 
    }
}