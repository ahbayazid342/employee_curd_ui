import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7144/api/User/";

  constructor(private http: HttpClient) {

  }

  
  signup(userObj: any){
      return this.http.post<any> (`${this.baseUrl}register`, userObj);
  }

  login (loginObj: any) {
    return this.http.post<any> (`${this.baseUrl}authenticate`, loginObj);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem ('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem ('token');
  }

  isLogedIn() : boolean{
    return !!localStorage.getItem ('token');
  }

}
