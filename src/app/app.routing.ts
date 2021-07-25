import { Routes } from '@angular/router';


export const appRoutes: Routes = [
  {path: '', redirectTo:'', pathMatch:'full'},
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then(r=>r.AuthModule)},
  {path:'dashboard', loadChildren:()=> import('./app-blood/app-blood.module').then(r=>r.AppBloodModule)},
  {path:'user', loadChildren:()=> import('./app-person/app-person.module').then(r=>r.AppPersonModule)},
 
];

