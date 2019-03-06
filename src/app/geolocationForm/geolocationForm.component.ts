import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-geolocation-form',
  templateUrl: './geolocationForm.component.html',
  styleUrls: ['./geolocationForm.component.css']
})
export class GeolocationFormComponent implements OnInit {
  title = 'Geolocation Form';
  myForm: FormGroup;
  currentTime: number = Date.now();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      category: '',
      longitude: '',
      latitude: '',
      altitude: '',
      radius: '',
      timestamp: this.currentTime
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

}
