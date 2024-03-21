import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';

import localeEsCo from "@angular/common/locales/es-CO";
import localeFrCa from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsCo);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
