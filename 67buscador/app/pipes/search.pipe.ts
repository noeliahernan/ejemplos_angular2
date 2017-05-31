import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform
{
    transform(value: any, field: string, search: string)
    {
        if(search == "") {
            return value;
        }

        return value.filter((res) => {
            return res[field].includes(search);
        })
    }
}