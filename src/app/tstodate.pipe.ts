import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tstodate'
})
export class TstodatePipe implements PipeTransform {

  transform(value: number): string {
    var d = new Date(value);
    return `${('0' + d.getDate()).slice(-2)}.${('0' + d.getMonth()+1).slice(-2)}.${("000" + d.getFullYear()).slice(-4)} at ${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
  }

}
