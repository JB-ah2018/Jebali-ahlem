import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../classes/product';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchText: number, fieldName: string): any[] {

    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText;

    return items.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName].includes(searchText);
      }
      return false;
    });
   }

}
