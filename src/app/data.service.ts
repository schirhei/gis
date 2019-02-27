import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './geolocation.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://localhost:5001/api/todo";
  constructor(private _http: HttpClient) { }
  getUsers() {
    return this._http.get<Location[]>(this.apiUrl);
  }
}
