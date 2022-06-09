import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})


export class AdminPostsComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  posts: Post[] = [];

  ngOnInit(): void {
    var token = localStorage.getItem('Token');
    if (token == null) {
      this.router.navigate(['/login-user']);
    }
    

    this.postService.getAllPosts().subscribe(
      response => {
        this.posts = response;
      }
    );
  }
  Logout(): void {
    localStorage.removeItem('Token');
    alert('You have been logged out');
    window.location.href = '/login-user';
  }
}

function getValue() {
	return localStorage.getItem('Token');  
}
 


