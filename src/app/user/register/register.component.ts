import { Component, OnInit } from '@angular/core';


import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoading = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
   
  ) { }

  ngOnInit(): void {
  }

  changeHandler(data: any): void {
    console.log(data);
  }

  submitFormHandler(formValue: { email: string, password: string }):void {    
    this.userService.signup(formValue.email,formValue.password)
    }
  }

