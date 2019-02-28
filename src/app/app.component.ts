import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'GIS visualizer';
  private api = 'https://localhost:5001/api/todo';
  geos: any = {};
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getData().subscribe(geos => this.geos = geos);
  }

  getData() {
    // let myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // let options = new RequestOptions({ headers: myHeaders })
    const response = this.http.get(this.api);
    return response;
    // return this.http.get(this.api)
    //   .subscribe(data => {
    //     console.log(data, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    //     this.data = data;
    //   });
    // return this.http.get(this.api);
  }


}
