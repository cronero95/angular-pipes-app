import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonsPageComponent } from './pages/uncommons-page/uncommons-page.component';
import { CustomsPageComponent } from './pages/customs-page/customs-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommons',
    component: UncommonsPageComponent
  },
  {
    path: 'customs',
    component: CustomsPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
