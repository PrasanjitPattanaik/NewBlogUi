import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { UpdatePostRequest } from 'src/app/models/update-post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.scss']
})
export class AdminViewPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }
  post: Post | undefined;

  ngOnInit(): void {
    var token = localStorage.getItem('Token');
    if (token == null) {
      this.router.navigate(['/login-user']);
    }
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if(id)
        {
          this.postService.getPostById(id)
          .subscribe(
            response => {
              this.post = response;
            }
          );

        }
      }
    );
  }

  onClickSubmit(_data: any): void
  {
    //console.log(_data.content);
    const updatePostRequest: UpdatePostRequest = {
      id: _data.id,
      author: _data.author,
      content: _data.content,
      featuredImageUrl: _data.featuredImageUrl,
      publishDate: _data.publishDate,
      summary: _data.summary,
      title: _data.title,
      urlHandel: _data.urlHandel,
      visible: _data.visible,
      updatedDate: _data.updatedDate
    }
    
    this.postService.updatePost(this.post?.id, _data)
    .subscribe(
      response => {
        alert('Post updated successfully');
        this.router.navigate(['/admin/posts']);
      }
    )
  }

  deletePost(): void {
    this.postService.deletePost(this.post?.id)
    .subscribe(
      response => {
        alert('Post deleted successfully');
        this.router.navigate(['/admin/posts']);
        
      }
    );
  }


}
