import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strReverse'
})
export class StrReversePipe implements PipeTransform {
  value:String=""
  transform(value: string, ...args: unknown[]): any {
    this.value= value.split("").reverse().join("");
    return this.value
  
  }

}
