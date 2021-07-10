import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalFileReaderService {

constructor(private http:HttpClient) { }


getJsonValues(path:string){
  return this.http.get<any>(path); 
}

}
