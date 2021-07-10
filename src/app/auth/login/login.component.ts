import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from '../interfaces/login';
import { AuthService } from '../services/auth.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginCred: login;

  constructor(private formBuilder:FormBuilder, private authService:AuthService,readonly snackBar: MatSnackBar, private router:Router) { }

  ngOnInit() {
    this.loginFormMethod();
  }


  loginFormMethod(){
    return this.loginForm = this.formBuilder.group({
      EmailOrUsername:['mohsi.ahamed@gmail.com',[Validators.required, Validators.maxLength(50)]],
      password:['0123456',[Validators.required]]
    });
  }

  login(){
    this.loginCred = Object.assign({}, this.loginForm.value);
    this.authService.login(this.loginCred).subscribe(next => {
      this.router.navigate(['user']);
    },error=> {
      this.openSnackBar("Failed to log in", "close")
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 2*1000
    });
  }

}
