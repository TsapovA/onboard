import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsModule } from './notifications/notifications.module';
import {NewsApiModule} from './news-api/news-api.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, HttpClientModule, WeatherModule, NotificationsModule, NewsApiModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
