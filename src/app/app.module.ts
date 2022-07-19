import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './shared/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmchartsComponent } from './amcharts/amcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    HomeComponent,
    AmchartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
