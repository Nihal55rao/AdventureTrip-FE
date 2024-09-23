import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupInput: any;
  name: any;
  email: any;
  password: any;
  confirmpassword: any;

  constructor(private api: ApiService, public router: Router,private commonService: CommonService) { }

  ngOnInit(): void {
  }
  

  onSignUp() {
    this.signupInput = {
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirm: this.confirmpassword
    };
    this.api.signup(this.signupInput).subscribe(
      (res: any) => {
        this.commonService.setItem('jwt', res.token)
        this.commonService.setItem('loggedin', true)
        // Handle successful signup
        this.commonService.Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        this.router.navigate(['/home']);
      },
      (error: any) => {
        // Handle signup error
        this.commonService.Toast.fire({
          icon: "error",
          title: "Failed to register! Try again"
        });
      }
    );
  }

}
