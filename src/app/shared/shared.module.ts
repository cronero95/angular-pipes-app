import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
