import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from 'src/app/app-person/interfaces/person';
import {  PaginatedResult, Pagination } from 'src/app/global-interfaces/pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BloodsearchService {

  baseUrl = environment.apiUrl;
constructor(private http:HttpClient) { }



getAllBloodDonors(pageNumber?, pageSize?): Observable< PaginatedResult<Person[]>>{
  const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<Person[]>(); 

  let params = new HttpParams();

  if(pageNumber != null && pageSize != null){
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return this.http.get<Person[]>(this.baseUrl + 'userandperson/getAllDonors',{observe: 'response', params}).pipe(
    map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
    })
  );
}

getPersonsByBloodGroup(bloodGroup, pageNumber?, pageSize?): Observable< PaginatedResult<Person[]>>{
  const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<Person[]>(); 

  let params = new HttpParams();

  if(pageNumber != null && pageSize != null){
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return this.http.get<Person[]>(this.baseUrl + 'userandperson/b/' + bloodGroup,{observe: 'response', params}).pipe(
    map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
    })
  );
}

getPersonsByDivision(division, pageNumber?, pageSize?): Observable< PaginatedResult<Person[]>>{
  const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<Person[]>(); 

  let params = new HttpParams();

  if(pageNumber != null && pageSize != null){
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return this.http.get<Person[]>(this.baseUrl + 'userandperson/div/' + division,{observe: 'response', params}).pipe(
    map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
    })
  );
}

getPersonsByDivisionAndBloodGroup(division, bloodGroup, pageNumber?, pageSize?): Observable< PaginatedResult<Person[]>>{
  const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<Person[]>(); 

  let params = new HttpParams();

  if(pageNumber != null && pageSize != null){
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return this.http.get<Person[]>(this.baseUrl + 'userandperson/div/' + division + '/' + bloodGroup,{observe: 'response', params}).pipe(
    map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
    })
  );
}

getPersonsByDistrict(district, pageNumber?, pageSize?): Observable< PaginatedResult<Person[]>>{
  const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<Person[]>(); 

  let params = new HttpParams();

  if(pageNumber != null && pageSize != null){
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return this.http.get<Person[]>(this.baseUrl + 'userandperson/dis/' + district,{observe: 'response', params}).pipe(
    map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
    })
  );
}

getPersonsByDistrictAndBloodGroup(district, bloodGroup, pageNumber?, pageSize?): Observable< PaginatedResult<Person[]>>{
  const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<Person[]>(); 

  let params = new HttpParams();

  if(pageNumber != null && pageSize != null){
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return this.http.get<Person[]>(this.baseUrl + 'userandperson/dis/' + district + '/' + bloodGroup,{observe: 'response', params}).pipe(
    map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
    })
  );
}


getPersonsByUpazilla(upazilla, pageNumber?, pageSize?): Observable< PaginatedResult<Person[]>>{
  const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<Person[]>(); 

  let params = new HttpParams();

  if(pageNumber != null && pageSize != null){
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return this.http.get<Person[]>(this.baseUrl + 'userandperson/uni/' + upazilla,{observe: 'response', params}).pipe(
    map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
    })
  );
}

getPersonsByUpazillaAndBloodGroup(upazilla, bloodGroup, pageNumber?, pageSize?): Observable< PaginatedResult<Person[]>>{
  const paginatedResult: PaginatedResult<Person[]> = new PaginatedResult<Person[]>(); 

  let params = new HttpParams();

  if(pageNumber != null && pageSize != null){
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);
  }

  return this.http.get<Person[]>(this.baseUrl + 'userandperson/uni/' + upazilla + '/' + bloodGroup,{observe: 'response', params}).pipe(
    map(response => {
        paginatedResult.result = response.body;
        if(response.headers.get('paginationheaders') != null){
          paginatedResult.pagination = JSON.parse(response.headers.get('paginationheaders'));
        }
        return paginatedResult;
    })
  );
}


}
