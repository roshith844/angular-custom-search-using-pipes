import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], searchTerm: any[]): any[] {
    let searchName = searchTerm[0].toLowerCase()
    let searchCompany = searchTerm[1].toLowerCase()
    let searchJob = searchTerm[2].toLowerCase()

    let result = data.filter((obj) => {
      let namePattern = new RegExp(`^${searchName}`)
      let companyPattern = new RegExp(`^${searchCompany}`)
      let jobPattern = new RegExp(`^${searchJob}`)
      if (namePattern.test(obj.name.toLowerCase()) &&
        companyPattern.test(obj.company.name.toLowerCase()) &&
        jobPattern.test(obj.company.designation.toLowerCase())) {
        return true
      }
      return false
    })
    
    return result;
  }
}
