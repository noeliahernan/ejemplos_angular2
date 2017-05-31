"use strict";
var redux_1 = require('redux');
var counter_reducer_1 = require('./counter.reducer');
exports.rootReducer = redux_1.combineReducers({
    counter: counter_reducer_1.counterReducer
});
//# sourceMappingURL=index.js.map