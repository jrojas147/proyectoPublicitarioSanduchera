import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxWhastappButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
