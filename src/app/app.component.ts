import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gis';
  private api = 'https://localhost:5001/api/todo';
  data: any = {};

  
  constructor(private http: Http) {
    this.getData();
  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    //let myHeaders = new Headers();
    //myHeaders.append('Content-Type', 'application/json');    
    //let options = new RequestOptions({ headers: myHeaders });
    return this.http.get(this.api)
      .subscribe(data => {
        console.log(data);
        this.data = data
      })
    return this.http.get(this.api)
  }
}
