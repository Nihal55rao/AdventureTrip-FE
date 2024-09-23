import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedin: boolean = false;
  user: any;
  photo: any;
  id: any;

  constructor(private api: ApiService, public router: Router,private commonService: CommonService) { }

  ngOnInit(): void {
    if(this.commonService.getItem('loggedin')) {
      this.loggedin = true;
      this.getUser();
      if(this.user.photo.length == 0){
        this.photo = '/assets/img/users/default.jpg'
      } else {
        this.photo = '/assets/img/users/' + this.user.photo
      }
    } else {
      this.loggedin = false;
    }
  }

  logout() {
    this.loggedin = false;
    this.commonService.setItem('loggedin', this.loggedin);
    this.router.navigate(['/']);
    this.commonService.Toast.fire({
      icon: "success",
      title: "You have Logged out successfully"
    });
  }

  getUser() {
    this.user = this.commonService.getItem('user') 
      console.log('User', this.user)
  }

}
