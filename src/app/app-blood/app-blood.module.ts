import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBloodComponent } from './app-blood.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { BloodGroupsSummeryComponent } from './bloodGroupsSummery/bloodGroupsSummery.component';
import { BloodRoutes } from './blood.routing';
import { BloodSearchComponent } from './bloodSearch/bloodSearch.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BloodRoutes,
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,  
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppBloodComponent,
    BloodGroupsSummeryComponent,
    BloodSearchComponent,
    MapComponent
  ]
})
export class AppBloodModule { }
