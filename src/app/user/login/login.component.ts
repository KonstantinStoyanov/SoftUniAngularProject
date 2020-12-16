import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  changeHandler(data: any): void {
    console.log(data);
  }

  submitFormHandler(formValue: { email: string, password: string }):void {
    this.userService.login(formValue.email,formValue.password)
    }
  }

