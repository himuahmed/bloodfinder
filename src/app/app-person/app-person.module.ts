import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPersonComponent } from './app-person.component';
import { PersonRoutes } from './person.routing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PersonProfileComponent } from './personProfile/personProfile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarModule } from 'ngx-avatar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AllInterceptors } from 'src/interceptors';

@NgModule({
  imports: [
    PersonRoutes,
    CommonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCardModule,
    FlexLayoutModule,
    AvatarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    ClipboardModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  declarations: [
    AppPersonComponent,
    PersonProfileComponent
  ],
  providers:[
    AllInterceptors
  ]
})
export class AppPersonModule { }
