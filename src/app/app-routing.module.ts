import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'HOME'
        }
      },
      {
        path: 'user',
       
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      
     
    ]
  },

];

export const AppRoutingModule = RouterModule.forRoot(routes);