import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import {LoginComponent} from './login/login.component';



@Injectable()
export class UserService {
  isLoading = false;
  errorMessage = '';

constructor (
  public auth: AngularFireAuth,
  private router: Router
){}


signup(email: string, password: string) {
  this.auth
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Success!', value);
      this.isLoading = true;
        this.router.navigate(['/']);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
}

login(email: string, password: string) {
  this.auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.isLoading = true;
      this.router.navigate(['/'])
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
}

logout() {
  this.auth.signOut();
  this.isLoading = true;
  this.router.navigate(['/'])
}






 
}




