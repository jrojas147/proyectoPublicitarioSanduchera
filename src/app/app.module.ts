import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingModule } from './componentes/booking/booking.module';
import { ContactModule } from './componentes/contact/contact.module'
import { HeaderModule } from './componentes/header/header.module';
import { HomeModule } from './componentes/home/home.module';
import { ProductsModule } from './componentes/products/products.module'
import { UsModule } from './componentes/us/us.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingModule,
    ContactModule,
    HeaderModule,
    HomeModule,
    ProductsModule,
    UsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
