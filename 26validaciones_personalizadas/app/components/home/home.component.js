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
var post_1 = require('../../classes/post');
var forms_1 = require('@angular/forms');
var forbidden_title_1 = require('../../form_validations/forbidden_title');
var HomeComponent = (function () {
    function HomeComponent(fb) {
        this.fb = fb;
        this.model = new post_1.Post(1, "Formularios con Angular 2", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
        this.formErrors = {
            'title': '',
            'content': ''
        };
        this.validationMessages = {
            'title': {
                'required': 'El título es requerido.',
                'minlength': 'El título debe tener más de 4 carácteres.',
                'maxlength': 'El título no debe tener más de 60 carácteres.',
                'forbiddenTitle': 'El título no puede contener "Curso de Angular2".'
            },
            'content': {
                'required': 'El contenido es requerido',
                'minlength': 'El título debe tener más de 20 carácteres.',
                'maxlength': 'El título no debe tener más de 200 carácteres.',
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    HomeComponent.prototype.buildForm = function () {
        var _this = this;
        this.postForm = this.fb.group({
            title: [this.model.title, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(60),
                    forbidden_title_1.forbiddenTitleValidator(/Curso de Angular 2/i)
                ])],
            content: [this.model.content, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(20),
                    forms_1.Validators.maxLength(200)
                ])]
        });
        this.postForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    HomeComponent.prototype.onValueChanged = function (data) {
        if (!this.postForm) {
            return;
        }
        console.log(data);
        var form = this.postForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    Object.defineProperty(HomeComponent.prototype, "post", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.onSubmit = function () {
        console.log(this.model);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'home.html',
            styles: ["\n    .col.s6 > .btn {\n       width: 100%;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map