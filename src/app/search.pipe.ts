import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(result: any[], text: string): any {
    if (!text) {
      return result;
    } else {
      result = result.filter(x => {
        return x.task.toString().indexOf(text) != -1;
      });
      return result;
    }
  }

}
