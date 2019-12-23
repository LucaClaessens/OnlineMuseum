import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearAge'
})
export class YearAgePipe implements PipeTransform {

  transform(value: any): any {
    return value < 0 ? `${Math.abs(value)} BC` : `${value} AD`;
  }

}
