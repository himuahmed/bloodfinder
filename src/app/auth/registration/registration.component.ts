import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { signup } from '../interfaces/signup';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  stepperOrientation: Observable<StepperOrientation>;

  usernameForm: FormGroup;
  registrationForm: FormGroup;
  username:string;
  signUpData: signup;

  isSignUpSuccessfull = false;

  constructor( private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder, private authService:AuthService,readonly snackBar: MatSnackBar) { 
    this.stepperOrientation = this.breakpointObserver.observe('(min-width: 800px)')
    .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
  }

  ngOnInit() {
    this.buildUsernameForm();
    this.buildRegistrationForm();
  }

  buildUsernameForm(){
   return this.usernameForm = this.formBuilder.group({
     username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]]
   })
  }

  buildRegistrationForm(){
    return this.registrationForm =  this.formBuilder.group({
      userName: [''],
      email:['',[Validators.required, Validators.email, Validators.maxLength(100), Validators.minLength(4)]],
      password: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(40)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(40)]]
    });
  }

  setUsername(){
    this.username = this.usernameForm.value['username'];
    console.log(this.username);
  }

  signUp(stepper:MatStepper){
    this.signUpData= Object.assign({}, this.registrationForm.value);
    this.signUpData['userName'] = this.username;
    this.authService.signup(this.signUpData).subscribe(res=>{
      this.openSnackBar("Registration Successfull.", "close");
      this.buildUsernameForm();
      this.buildRegistrationForm();
      this.usernameForm.markAsPristine();
      this.usernameForm.markAsUntouched();
      this.registrationForm.markAsPristine();
      this.registrationForm.markAsUntouched();
      this.isSignUpSuccessfull = true;
      stepper.reset();
    },error=> {
      this.openSnackBar("Failed to sign you up.", "close")
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 2*1000
    });
  }

}
