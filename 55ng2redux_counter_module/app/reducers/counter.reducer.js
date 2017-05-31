"use strict";
var counter_action_1 = require('../actions/counter.action');
var INITIAL_STATE = 0;
function counterReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case counter_action_1.CounterActions.INCREMENT_COUNTER:
            return state + 1;
        case counter_action_1.CounterActions.DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}
exports.counterReducer = counterReducer;
//# sourceMappingURL=counter.reducer.js.map