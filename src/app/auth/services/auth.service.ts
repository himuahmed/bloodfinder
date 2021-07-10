import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { login } from '../interfaces/login';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;
  loginUrl = 'auth/login';
  jwtHelper = new JwtHelperService();


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

isLoggedIn(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

logOut(){
  localStorage.removeItem('token');
}



}
