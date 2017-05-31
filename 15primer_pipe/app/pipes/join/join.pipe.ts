import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join'
})

export class JoinPipe implements PipeTransform
{
    transform(arr: Array<string>, separator: string, openClose: string): string {
        return openClose[0] + arr.join(separator) + openClose[1];
    }
}