import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


  constructor(private api: ApiService) { }

  // getuser() {
  //   this.api.getUser().subscribe(res => {
  //     this.user = res.data.data;
  //   })
  // }

  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

}
