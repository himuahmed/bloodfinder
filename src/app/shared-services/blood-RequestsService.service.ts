import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BloodRequestPost } from '../global-interfaces/bloodRequestPost';
import { PaginatedResult } from '../global-interfaces/pagination';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestsServiceService {

  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  fetchBloodRequestPosts(pageNumber?:number, pageSize?:number): Observable<PaginatedResult<BloodRequestPost[]>>{
    const paginatedResult: PaginatedResult<BloodRequestPost[]> = new PaginatedResult<BloodRequestPost[]>();
    let params = new HttpParams;
    if(pageNumber != null && pageSize != null){
      params = params.append('pageNumber', pageNumber);
      params = params.append('pageSize', pageSize);
    }

    return this.http.get<BloodRequestPost[]>(this.baseUrl+ 'bloodrequest/getbloodRequestList', {observe: 'response', params}).pipe(
      map(response=>{
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
      })
    );
  }
  
  postBloodRequest(bloodReuestPost: BloodRequestPost){
   return this.http.post<BloodRequestPost>(this.baseUrl+"bloodrequest/requestBlood", bloodReuestPost);
  }

}
