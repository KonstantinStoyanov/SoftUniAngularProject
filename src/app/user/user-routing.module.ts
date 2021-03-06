import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from '../picture/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      isLogged: false,
      noNavigation: true,
      title: 'REGISTER USER'
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      isLogged: false,
      title: 'USER LOGIN'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      isLogged: true,
      title: 'USER PROFILE'
    }
  },
  {
    path: 'user/detail/:id',
    component: DetailComponent
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);
