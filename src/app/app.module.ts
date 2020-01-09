import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObjectiveOverallComponent } from './objective-overall/objective-overall.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ObjectivesChildComponent } from './objectives-child/objectives-child.component';

import { GaugeModule } from 'angular-gauge';
import {FormsModule} from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ObjectiveOverallComponent,
    ObjectivesComponent,
    ObjectivesChildComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    FormsModule,
    GaugeModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
