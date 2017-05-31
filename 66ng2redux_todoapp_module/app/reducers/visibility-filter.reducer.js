"use strict";
exports.SHOW_COMPLETED = 'SHOW_COMPLETED';
exports.SHOW_ACTIVE = 'SHOW_ACTIVE';
exports.SHOW_ALL = 'SHOW_ALL';
function visibilityFilter(state, action) {
    if (state === void 0) { state = function (t) { return t; }; }
    console.log(action.type);
    switch (action.type) {
        case exports.SHOW_COMPLETED:
            return function (todo) { return todo.completed; };
        case exports.SHOW_ACTIVE:
            return function (todo) { return !todo.completed; };
        case exports.SHOW_ALL:
            return function (todo) { return todo; };
        default:
            return state;
    }
}
exports.visibilityFilter = visibilityFilter;
//# sourceMappingURL=visibility-filter.reducer.js.map