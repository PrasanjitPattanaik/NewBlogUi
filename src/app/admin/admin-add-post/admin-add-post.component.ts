import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddPostRequest } from 'src/app/models/add-post.model';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.scss']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }
  // post: Post | undefined;
  
  post: AddPostRequest = {
    id: '040ad80a-cea7-470e-83a8-0a201bbe49ss',
    author: '',
    content: '',
    featuredImageUrl: '',
    publishDate: '',
    summary: '',
    title: '',
    urlHandel: '',
    visible: '',
    updatedDate: ''

  }

  ngOnInit(): void {
    var token = localStorage.getItem('Token');
    if (token == null) {
      this.router.navigate(['/login-user']);
    }
  }

  onClickSubmit(_data: any): void {
    //console.log(_data);
    const data2 = {
        "id": "040ad80a-cea7-470e-83a8-0a201bbe49dd",
        "author": _data.author,
        "content": _data.content,
        "featuredImageUrl": _data.featuredImageUrl,
        "publishDate": _data.publishDate,
        "summary": _data.summary,
        "title": _data.title,
        "updatedDate": _data.updatedDate,
        "urlHandel": _data.urlHandel,
        "visible": _data.visible.toString()
    }
    console.log(data2);
    this.postService.addPost(data2)
    .subscribe(
      response => {
        alert('Post added successfully');
      }
    )

  }

}
