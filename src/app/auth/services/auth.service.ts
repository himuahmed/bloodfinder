import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { login } from '../interfaces/login';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { signup } from '../interfaces/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;
  loginUrl = 'auth/login';
  signUpUrl= 'auth/usersignup';
  jwtHelper = new JwtHelperService();
  userLoggedIn:boolean = false;

constructor(private http:HttpClient) { }

login(loginCred: login){
  return this.http.post(this.baseUrl+this.loginUrl, loginCred).pipe(
    map((response:any)=>{
      const res = response;
      if(res){
        localStorage.setItem('token', res.token);
      }
    })
  );
}

signup(signupCred: signup){
  return this.http.post(this.baseUrl + this.signUpUrl, signupCred);
}

isLoggedIn(){
  const token = localStorage.getItem('token');
  this.userLoggedIn =  !this.jwtHelper.isTokenExpired(token)
  //return !this.jwtHelper.isTokenExpired(token);
  return this.userLoggedIn;
}

logOut(){
  localStorage.removeItem('token');
}



}
