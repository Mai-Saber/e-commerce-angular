import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(description:string, n :number): string {
    return description.substring(0,n);
  }

}
