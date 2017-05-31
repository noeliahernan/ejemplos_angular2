import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenTitleValidator(titleRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const title = control.value;
        const check = titleRe.test(title);
        return check ? {'forbiddenTitle': {title}} : null;
    }
}