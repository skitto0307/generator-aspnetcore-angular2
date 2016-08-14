import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';
import { HomeComponent }    from './home/home.component';
import { AboutComponent }   from './about/about.component';

import { routing }          from './app.routing';

// // Extend Observable through the app
import 'rxjs/Rx';

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      routing
      ],
  declarations: [
      AppComponent, 
      HomeComponent,
      AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule{}