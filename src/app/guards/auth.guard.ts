import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService,private router:Router,readonly snackBar: MatSnackBar){}

  canActivate():  boolean {
    if(this.authService.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.openSnackBar("you are not authorized.","close");
      this.router.navigate(['']);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 2*1000
    });
  }

  
}
