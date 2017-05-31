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
var EventsDirective = (function () {
    function EventsDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    EventsDirective.prototype.onmouseenter = function () {
        this.brandEvent('#EF997D', false);
    };
    EventsDirective.prototype.onmouseleave = function () {
        this.brandEvent(null, false);
    };
    EventsDirective.prototype.onclick = function () {
        this.brandEvent('#EF997D', true);
    };
    EventsDirective.prototype.brandEvent = function (color, underline) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
        if (underline) {
            this.renderer.setElementStyle(this.el.nativeElement, 'textDecoration', 'underline');
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement, 'textDecoration', '');
        }
    };
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], EventsDirective.prototype, "onmouseenter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], EventsDirective.prototype, "onmouseleave", null);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], EventsDirective.prototype, "onclick", null);
    EventsDirective = __decorate([
        core_1.Directive({
            selector: '[EventsDirective]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], EventsDirective);
    return EventsDirective;
}());
exports.EventsDirective = EventsDirective;
//# sourceMappingURL=events.directive.js.map