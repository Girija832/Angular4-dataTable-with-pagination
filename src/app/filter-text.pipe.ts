import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false  // impure pipe
})
export class FilterTextPipe implements PipeTransform {

  transform(items: any, searchText: string): any {
    if (!items || !searchText) return items;
      return FilterTextPipe.filter(items,searchText);
    // searchText = searchText.toLowerCase();
    //
    // return items.filter( filterRes => {
    //   return filterRes.toLowerCase().includes(searchText);
    // });
  }

  static filter(items: Array<{ [key: string]: any }>, searchText: string): Array<{ [key: string]: any }> {

    const toCompare = searchText.toLowerCase();

    return items.filter(function (item: any) {
      for (let property in item) {
        if (item[property] === null) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    });
  }

}
