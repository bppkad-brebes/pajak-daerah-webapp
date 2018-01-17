import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SpptComponent } from './sppt/sppt.component';

import localeId from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeId);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
