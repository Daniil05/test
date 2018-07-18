import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';

import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket/basket.service';

import { HistoryComponent } from './history/history.component';
import { HistoryService } from './history/history.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'history', component: HistoryComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
	  HomeService,
	  BasketService,
	  HistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
