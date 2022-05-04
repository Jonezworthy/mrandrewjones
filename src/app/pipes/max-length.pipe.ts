import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maxLength',
    pure: true
})
export class MaxLengthPipe implements PipeTransform {

    transform(value: string, length: number): any {
        if (value && value.toString() && value.toString().length) {
            if (value.length > length) {
                return value.slice(0, length) + '...';
            }
        }
        return value;
    }
}
