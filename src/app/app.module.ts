import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SpptComponent } from './sppt/sppt.component';

import localeId from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

registerLocaleData(localeId);

@NgModule({
  exports: [
    CdkTableModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SpptComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, 
    BrowserAnimationsModule, MatCardModule, MatTableModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'id' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
