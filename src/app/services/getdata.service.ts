import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get('https://zil-test.s3.us-east-1.amazonaws.com/json-data.json')
  }
}
