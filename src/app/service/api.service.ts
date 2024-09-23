import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // private getAuthToken(): string {
  //   return this.cookieService.get('jwt');
  // }


  signup(data: any): Observable<any> {
    return this.http.post<any>("/api/v1/users/signup", data, {withCredentials: true});
  }

  login(data: any): Observable<any> {
    return this.http.post<any>("/api/v1/users/login", data, { withCredentials: true });
  }

  updateUserPassword(data: any): Observable<any> {
    return this.http.patch<any>("/api/v1/users/updateMyPassword", data, { withCredentials: true });
  }

  updateUserProfile(data: any): Observable<any> {
    return this.http.patch<any>("/api/v1/users/updateMyProfile", data, { withCredentials: true });
  }

  getTopTours() {
    return this.http.get<any>("/api/v1/tours/top-9-tours").pipe(map((res:any) => {
      return res
    }))
  };

  getAllTours() {
    // const token = this.getAuthToken();
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>("/api/v1/tours",{ withCredentials: true }).pipe(map((res:any) => {
      return res
    }))
  };

  getUser() {
    return this.http.get<any>("/api/v1/users/getMyProfile",{ withCredentials: true }).pipe(map((res:any) => {
      return res
    }))
  }

  getTour(id: any) {
    // const token = this.getAuthToken();
    // console.log('token', token)
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`/api/v1/tours/${id}`).pipe(map((res:any) => {
      return res
    }))
  };


}
