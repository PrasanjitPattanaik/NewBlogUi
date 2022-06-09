import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPostRequest } from '../models/login-model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  key: string = 'Token';
  myItem: string | undefined;

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
    //console.log(_data);
    this.postService.loginUser(_data.email, _data.password)
    .subscribe(
      response => {
        alert('Login successfully');
        localStorage.setItem(this.key, 'Login');
        //this.myItem = localStorage.getItem(this.key);
        this.router.navigate(['/admin/posts']);
      }
    )
  }
  

}
