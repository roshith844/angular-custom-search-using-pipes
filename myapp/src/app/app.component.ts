import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  searchInput = ""
  data = [{name: 'ramu', age: '20'}, {name : 'rahul', age: '30'}]
}
