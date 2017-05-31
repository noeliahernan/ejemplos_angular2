"use strict";
var redux_1 = require('redux');
var todo_reducer_1 = require('./todo.reducer');
var visibility_filter_reducer_1 = require('./visibility-filter.reducer');
exports.rootReducer = redux_1.combineReducers({
    todos: todo_reducer_1.todoReducer,
    visibilityFilter: visibility_filter_reducer_1.visibilityFilter
});
//# sourceMappingURL=index.js.map