import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from './data.service';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
