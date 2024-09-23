import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  User: any;
  userId: any;
  loggedin: boolean = false;
  confirmpassword: any;
  currentPassword: any;
  newpassword: any;
  username: any;
  ueremail: any;

  constructor(private api: ApiService, public router: Router, public commonService: CommonService) { }

  ngOnInit(): void {
    this.User = this.commonService.getItem('user')
  }

  updateProfile() {
    const updateProfileData = {
      name: this.username,
      email: this.ueremail,
    }
    this.api.updateUserProfile(updateProfileData).subscribe(
      (res: any) => {
        this.loggedin = false;
        this.commonService.setItem('loggedin', this.loggedin);
        this.router.navigate(['/login']);
        // Handle successful signup
        this.commonService.Toast.fire({
          icon: "success",
          title: "Profile details Updated successfully"
        });
      },
      (error: any) => {
        // Handle signup error
        this.commonService.Toast.fire({
          icon: "error",
          title: "Failed to login! Try again"
        });
      }
    );
  }

  updatePassword() {
    const updatePasswordData = {
      passwordCurrent: this.currentPassword,
      password: this.newpassword,
      passwordConfirm: this.confirmpassword,
    }
    this.api.updateUserPassword(updatePasswordData).subscribe(
      (res: any) => {
        this.loggedin = false;
        this.commonService.setItem('loggedin', this.loggedin);
        this.router.navigate(['/login']);
        // Handle successful signup
        this.commonService.Toast.fire({
          icon: "success",
          title: "Password Updated successfully"
        });
      },
      (error: any) => {
        // Handle signup error
        this.commonService.Toast.fire({
          icon: "error",
          title: "Failed to login! Try again"
        });
      }
    );

  }

}
