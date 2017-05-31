"use strict";
function forbiddenTitleValidator(titleRe) {
    return function (control) {
        var title = control.value;
        var check = titleRe.test(title);
        return check ? { 'forbiddenTitle': { title: title } } : null;
    };
}
exports.forbiddenTitleValidator = forbiddenTitleValidator;
//# sourceMappingURL=forbidden_title.js.map