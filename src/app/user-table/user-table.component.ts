import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class USERTABLEComponent implements OnInit {
  data: any =[]
  public searchOne: string = ''
  public searchTwo: string = ''
  public searchThree: string = ''
  constructor(private api: GetdataService) {

  }
  ngOnInit(): void {
    this.api.getData().subscribe((res) => {
      this.data = res
    })
  }


}
