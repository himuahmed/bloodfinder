import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { District } from 'src/app/global-interfaces/district';
import { Division } from 'src/app/global-interfaces/division';
import { Union } from 'src/app/global-interfaces/union';
import { Upazila } from 'src/app/global-interfaces/upazila';
import { bloodGroup } from 'src/app/global-interfaces/bloodGroup';
import { ExternalFileReaderService } from 'src/app/shared-services/externalFileReader.service';
import { orderBy as _orderBy, assign as _assign, filter as _filter, cloneDeep as _cloneDeep, remove as _remove } from 'lodash';
import * as _ from 'lodash';

@Component({
  selector: 'app-bloodSearch',
  templateUrl: './bloodSearch.component.html',
  styleUrls: ['./bloodSearch.component.scss']
})

export class BloodSearchComponent implements OnInit,OnDestroy {
  districtPath = '../../assets/JsonFiles/districts.json';
  divisionPath = '../../assets/JsonFiles/divisions.json';
  unionsPath = '../../assets/JsonFiles/unions.json';
  upazilasPath = '../../assets/JsonFiles/upazilas.json';

  unsubscribe$ = new Subject();
  districts: District[];
  divisions:Division[];
  upazila:Upazila[];
  //union:Union[];
  isDivisionSelected = false;
  selectedDistrict:District;
  selectedDivision:Division;
  selectedUpazila:Upazila;

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
  
  constructor(private externalFileReaderService:ExternalFileReaderService) { }
  //AIzaSyA3tHeCwkt4eXWSAHxWFpx2KzgVfIXfhQE
  ngOnInit() {
    //this.getAllBdLocations();
    this.getDistricts();
    this.getDivisions();
    this.getUpazilas();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  divisionChecked(){
    this.isDivisionSelected = true
    this.districts = _filter(this.districts, district=> district.division_id == this.selectedDivision.id);
    this.upazila = this.filterObjsInArr(this.upazila, this.districts);
    console.log(this.districts);
    console.log('Upazilla list:');
    console.log(this.upazila);
  }

  isDistrictChecked = false;
  districteChecked(){
    this.isDistrictChecked = true;
    this.upazila = _filter(this.upazila, u=> u.district_id == this.selectedDistrict.id);
    this.selectedDivision = _filter(this.divisions, u=> u.id == this.selectedDistrict.division_id)[0];
    debugger;
    this.isDivisionSelected = true;
  }

  isUpazilaChecked = false;
  upazilaChecked(){
    this.isUpazilaChecked = true;
    this.selectedDistrict = _filter(this.districts, district=> district.id == this.selectedUpazila.district_id)[0];
    this.selectedDivision = _filter(this.divisions, u=> u.id == this.selectedDistrict.division_id)[0];
    this.isDistrictChecked = true;
    this.isDivisionSelected = true;
  }

  filterObjsInArr(arr, selection) {
    let tempArr = _cloneDeep(arr);
    tempArr = [];
    let tempArr2 = [];
    for(let item of selection){
      for (let arrItem of arr){
        if(item['id'] === arrItem['district_id']){
          tempArr2.push(arrItem);
        }
      }
    }
    return tempArr2;
    
  }

  getDivisions(){
    this.externalFileReaderService.getJsonValues(this.divisionPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.divisions = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
  }

  getDistricts(){
    this.externalFileReaderService.getJsonValues(this.districtPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.districts = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
  }

  getUpazilas(){
    this.externalFileReaderService.getJsonValues(this.upazilasPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.upazila = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
  }
 
/*   getAllBdLocations(){
    this.externalFileReaderService.getJsonValues(this.districtPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.districts = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
    this.externalFileReaderService.getJsonValues(this.divisionPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.divisions = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
    this.externalFileReaderService.getJsonValues(this.upazilasPath).pipe(takeUntil(this.unsubscribe$)).subscribe(res=>{
      this.upazila = _orderBy(res,[x=> x.name.toLowerCase()], ['asc']);
    });
  } */



  
}
