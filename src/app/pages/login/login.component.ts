import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInput: any;
  email: any;
  password: any;
  confirmpassword: any;

  constructor(private api: ApiService,public router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onLoginUp() {
    this.loginInput = {
      email: this.email,
      password: this.password,
    };
    this.api.login(this.loginInput).subscribe(
      (res: any) => {
        this.commonService.setItem('jwt', res.token)
        this.commonService.setItem('loggedin', true)
        this.commonService.setItem('user', res.data.user)
        // Handle successful signup
        this.commonService.Toast.fire({
          icon: "success",
          title: "Logged in successfully"
        });
        this.router.navigate(['/home']);
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
