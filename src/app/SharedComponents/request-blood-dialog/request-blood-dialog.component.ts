import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bloodGroup } from 'src/app/global-interfaces/bloodGroup';
import { BloodRequestPost } from 'src/app/global-interfaces/bloodRequestPost';
import { orderBy as _orderBy, assign as _assign, filter as _filter, cloneDeep as _cloneDeep, remove as _remove } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { BloodRequestsServiceService } from 'src/app/shared-services/blood-RequestsService.service';


@Component({
  selector: 'app-request-blood-dialog',
  templateUrl: './request-blood-dialog.component.html',
  styleUrls: ['./request-blood-dialog.component.scss']
})
export class RequestBloodDialogComponent implements OnInit {

  bloodReqForm: FormGroup;
  bloodReqData:BloodRequestPost;
  closeDialog:boolean= false;
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

  constructor(private formBuilder:FormBuilder,private http:HttpClient, private bloodReqService:BloodRequestsServiceService) { }

  ngOnInit() {
    this.bloodReqFormMethod();
  }

  bloodReqFormMethod(){
   return this.bloodReqForm =  this.formBuilder.group({
      bloodGroup:['',[Validators.required]],
      description:['']
    });
  }

  addBloodRequest(){
    this.bloodReqData = _assign({}, this.bloodReqForm.value);
    console.log(this.bloodReqData);
    this.bloodReqService.postBloodRequest(this.bloodReqData).subscribe(res=>{
      console.log(res);
      this.closeDialog = true;
    })
  }

}
