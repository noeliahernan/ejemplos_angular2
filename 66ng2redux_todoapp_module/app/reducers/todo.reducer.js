"use strict";
var todo_actions_1 = require('../actions/todo.actions');
function todoReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case todo_actions_1.TodoActions.ADD_TODO: {
            return state.concat([
                {
                    id: state.reduce(function (max, todo) { return Math.max(todo.id, max); }, -1) + 1,
                    completed: false,
                    text: action.payload
                }
            ]);
        }
        case todo_actions_1.TodoActions.TOGGLE_TODO: {
            return state.map(function (todo) {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return Object.assign(todo, { completed: !todo.completed });
            });
        }
        case todo_actions_1.TodoActions.REMOVE_TODO: {
            return state.filter(function (todo) { return todo.id !== action.payload; });
        }
        default:
            return state;
    }
}
exports.todoReducer = todoReducer;
//# sourceMappingURL=todo.reducer.js.map