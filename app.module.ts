import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero.service';



@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
  ],

  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent 
  ],

  bootstrap:    [ 
    AppComponent 
  ],

  providers: [
    HeroService
  ]
})
export class AppModule { }
