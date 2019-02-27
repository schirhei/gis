import { Component, OnInit } from '@angular/core';
import { Location } from './geolocation.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  geolocation$: Location[];
  constructor(private dataService: DataService) {}
  ngOnInit(){
    return this.dataService.getUsers()
    .subscribe(data => this.geolocation$ = data);
  }
}