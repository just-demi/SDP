import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'main',
        loadChildren: () => import('../pages/main/main.module').then(
          m => m.MainPageModule
        )
      },
      {
        path: 'dh-staff-main',
        loadChildren: () => import('../pages/dh-staff-main/dh-staff-main.module').then(
          m => m.DhStaffMainPageModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}