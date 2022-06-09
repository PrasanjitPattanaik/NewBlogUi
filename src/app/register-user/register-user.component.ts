import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPostRequest } from '../models/login-model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }

  login: LoginPostRequest = {
    email: '',
    password: '',
    UserId: '',
    UserName: '',
    phone: ''

  }

  ngOnInit(): void {
  }

  onClickSubmit(_data: any): void {
    _data.UserId = 'dfdasferw3ra3r4';
    let randomOtp = Math.floor(Math.random() * 100000);
    console.log(randomOtp);
    this.postService.sendOtp(_data.email, randomOtp.toString()).subscribe(data => {
      // console.log(data)

    }
      , error => {
        console.log(error);
      }
    );
    let otp = prompt('Enter OTP');

    if (otp == randomOtp.toString()) {
      this.postService.createUser(_data)
        .subscribe(
          response => {
            alert('Register successfully');
            this.router.navigate(['/login-user']);
          }
        )
    }
    else {
      alert('OTP is wrong');
      this.router.navigate(['/register-user']);
    }


  }


}
