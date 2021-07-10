import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PersonProfileComponent } from './personProfile/personProfile.component';

const routes: Routes = [
  { 
    path:'user',
    children:[
      {path:'',component:PersonProfileComponent, canActivate:[AuthGuard]}
    ]
   },
];

export const PersonRoutes = RouterModule.forChild(routes);
