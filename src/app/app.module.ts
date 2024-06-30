import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DiabeticService } from './diabetic-service.service';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent
  ],
  providers: [DiabeticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
