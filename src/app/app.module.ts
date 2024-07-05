import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { GlycemieFormComponent } from './glycemie-form/glycemie-form.component';
import { GlycemieListComponent } from './glycemie-list/glycemie-list.component';
import { GlycemieChartComponent } from './glycemie-chart/glycemie-chart.component';
import { GlycemieUpdateComponent } from './glycemie-update/glycemie-update.component';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    GlycemieChartComponent,
    AppComponent,
    HomeComponent,
    GlycemieFormComponent,
    GlycemieListComponent,
    GlycemieChartComponent,
    GlycemieUpdateComponent,
    // Add ChartModule here
  ],
  providers: [],
})
export class AppModule { }
