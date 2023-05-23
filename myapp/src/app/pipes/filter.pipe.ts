import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    let result = value.filter((item: any) => {
      let objValues = Object.values(item)
      let pattern = new RegExp(`^${input}`)
      let flag = 0
      objValues.forEach((element: any) => {
        if (pattern.test(element)) {
          flag = 1
        }
      });
      if (flag === 1) {
        return true
      } else {
        return false
      }

    })
    return result
  }

}
