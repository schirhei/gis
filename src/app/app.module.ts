import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZeroConfigComponentComponent } from './zero-config-component/zero-config-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ZeroConfigComponentComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
