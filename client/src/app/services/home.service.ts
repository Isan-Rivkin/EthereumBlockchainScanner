import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable()
export class HomeService {

  constructor(private http:HttpClient) {
  }
  cookieRequest(){
    // post article result
      return this.http.get('http://localhost:3000/cookie').map(res=>{
        return res;
      });
  }
}
