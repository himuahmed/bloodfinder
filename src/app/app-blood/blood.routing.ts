import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { BloodGroupsSummeryComponent } from './bloodGroupsSummery/bloodGroupsSummery.component';

const routes: Routes = [
  { 
    path:'dashboard',
    children:[
      {path:'',component:BloodGroupsSummeryComponent}
    ]
   },
];


export const BloodRoutes = RouterModule.forChild(routes);
