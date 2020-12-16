import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


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
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'about'
        }
      }
      
     
    ]
  },

];

export const AppRoutingModule = RouterModule.forRoot(routes);