"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var visibility_filter_actions_1 = require('../../actions/visibility-filter.actions');
var ng2_redux_1 = require('ng2-redux');
var FilterSelectComponent = (function () {
    function FilterSelectComponent(actions) {
        this.actions = actions;
        this.filters = [
            { name: 'Ver todos', action: 'SHOW_ALL' },
            { name: 'Ver completados', action: 'SHOW_COMPLETED' },
            { name: 'Ver activos', action: 'SHOW_ACTIVE' }
        ];
    }
    __decorate([
        ng2_redux_1.select('visibilityFilter'), 
        __metadata('design:type', Array)
    ], FilterSelectComponent.prototype, "visibilityFilter$", void 0);
    FilterSelectComponent = __decorate([
        core_1.Component({
            selector: 'filter-select',
            template: "\n    <hr />\n    <div>\n        <ul>\n            <li \n                style=\"margin-right: 10px\" \n                class=\"waves-effect waves-light btn green\"\n                (click)=\"actions.updateFilter(filter.action)\" \n                *ngFor=\"let filter of filters\">\n                {{ filter.name }}\n            </li>\n        </ul>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [visibility_filter_actions_1.VisibilityFilterActions])
    ], FilterSelectComponent);
    return FilterSelectComponent;
}());
exports.FilterSelectComponent = FilterSelectComponent;
//# sourceMappingURL=filter-select.component.js.map