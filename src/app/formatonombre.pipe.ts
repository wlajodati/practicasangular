import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatNombre'
})
export class FormatonombrePipe implements PipeTransform {

  transform(param1: string, param2: any): any {
    return "[" + param1 + " " + param2 + "]";
  }

}
