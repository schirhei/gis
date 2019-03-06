import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Location } from './geolocation.model';
import { DataService } from './data.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'GIS visualizer';
  geolocation$: Location[];
  dtOptions: DataTables.Settings = {};

  constructor(
    private dataService: DataService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
    this.matIconRegistry.addSvgIcon(
      `map`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/map.svg')
    );
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 12
    };

    return this.dataService.getUsers()
    .subscribe(data => this.geolocation$ = data);
  }
}








// export class AppComponent implements OnInit {
//   title = 'GIS visualizer';
//   private api = 'https://localhost:5001/api/todo';
//   geos: any = {};
//   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
//   dtOptions: DataTables.Settings = {};

//   constructor(private http: HttpClient) {
//   }

//   ngOnInit() {
//     this.getData().subscribe(geos => this.geos = geos);
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10
    // };
//   }

//   getData() {
//     // let myHeaders = new Headers();
//     // myHeaders.append('Content-Type', 'application/json');
//     // let options = new RequestOptions({ headers: myHeaders })
//     const response = this.http.get(this.api);
//     return response;
//   }


// }
