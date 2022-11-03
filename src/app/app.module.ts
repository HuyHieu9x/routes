import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductModule } from './components/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent  
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
