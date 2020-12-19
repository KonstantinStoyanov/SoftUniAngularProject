// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: 'user/detail/:id',
    component: DetailComponent
  }
];

export const PictureRoutingModule = RouterModule.forChild(routes);
