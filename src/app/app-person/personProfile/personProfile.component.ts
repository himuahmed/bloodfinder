import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/shared-services/user-service.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Person } from '../interfaces/person';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExternalFileReaderService } from 'src/app/shared-services/externalFileReader.service';
import { District } from 'src/app/global-interfaces/district';
import { Division } from 'src/app/global-interfaces/division';
import { Union } from 'src/app/global-interfaces/union';
import { Upazila } from 'src/app/global-interfaces/upazila';
import { bloodGroup } from 'src/app/global-interfaces/bloodGroup';
import { orderBy as _orderBy, assign as _assign } from 'lodash'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-personProfile',
  templateUrl: './personProfile.component.html',
  styleUrls: ['./personProfile.component.scss']
})
export class PersonProfileComponent implements OnInit,OnDestroy {

  districtPath = '../../assets/JsonFiles/districts.json';
  divisionPath = '../../assets/JsonFiles/divisions.json';
  unionsPath = '../../assets/JsonFiles/unions.json';
  upazilasPath = '../../assets/JsonFiles/upazilas.json';

  updatePersonForm:FormGroup;
 
  unsubscribe$ = new Subject();
  isLoading= true;
  person:Person;
  updatedPersonData:Person = {};
  hasPersonDetails = false;
  isEdit = false;
  profileUpdated = false;

  bloodGroupList: bloodGroup[] = [
    {name: 'A RhD positive (A+)', value:'A+'},
    {name: 'A RhD negative (A-)', value:'A-'},
    {name: 'B RhD positive (B+)', value:'B+'},
    {name: 'B RhD negative (B-)', value:'B-'},
    {name: 'O RhD positive (O+)', value:'O+'},
    {name: 'O RhD negative (O-)', value:'O-'},
    {name: 'AB RhD positive (AB+)', value:'AB+'},
    {name: 'AB RhD negative (AB-)', value:'AB-'},
  ]
  selectedBloodGroup:string;

  districts: District[];
  divisions:Division[];
  upazila:Upazila[];
  union:Union[];
  und = undefined;


  constructor(private userService:UserServiceService,readonly snackBar: MatSnackBar, private externalFileReaderService: ExternalFileReaderService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPerson();
    this.getAllBdLocations();
    this.updatePersonFormMethod();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updatePersonFormMethod(){
    return this.updatePersonForm = this.formBuilder.group({
      fullName:[this.person?.fullName, [Validators.required, Validators.maxLength(40), Validators.minLength(2)]],
      bloodGroup:[this.person?.bloodGroup, [Validators.required]],
      //email:[this.person?.email, [Validators.required]],
      contactNo:[this.person?.contactNo, [Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      division:[this.person?.division, [Validators.required]],
      district:[this.person?.district, [Validators.required]],
      union:[this.person?.union, [Validators.required]],
    })
  }

  getPerson(){
    this.userService.getPersonByUserId().pipe(takeUntil(this.unsubscribe$)).subscribe((res:Person)=>{   
      if(res){
        this.person = res;
        console.log(this.person);
        //this.person.createdAt = new Date(Date.parse(res.createdAt)).toString();
        this.isLoading = false; 
        this.hasPersonDetails = true;
        this.selectedBloodGroup = res.bloodGroup;
        this.profileUpdated = false;
        this.updatePersonFormMethod();
      }
  },error=>{
    //this.updatePersonFormMethod();
    this.openSnackBar("Failed to load person details.", "close"); 
  });
  }

  updatePersonDate(){
    this.updatedPersonData = _assign({},this.person,this.updatePersonForm.value);
    this.userService.updatePersonInformation(this.updatedPersonData).subscribe(res=>{
      if(res){
        this.profileUpdated = true;
        this.openSnackBar('your profile information has been updated', 'close');
      }
    },error=>{
      this.openSnackBar('Failed to update information.', 'close');
    })
    //console.log(this.person);
    //console.log(this.updatedPersonData);
  }

  getAllBdLocations(){
    this.externalFileReaderService.getJsonValues(this.districtPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.districts = _orderBy(res,[x=> x.name.toLowerCase()], ['asc'])
      //this.districts = res;
      //console.log(this.districts);
    });
    this.externalFileReaderService.getJsonValues(this.divisionPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.divisions = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
    this.externalFileReaderService.getJsonValues(this.unionsPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.union = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
    this.externalFileReaderService.getJsonValues(this.upazilasPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.upazila = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 2*1000
    });
    this.isLoading = false;
  }

}