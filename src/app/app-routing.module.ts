import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login-user',
    component: LoginUserComponent
  },
  {
    path: 'register-user',
    component: RegisterUserComponent
  },
  {
    path: 'post',
    component: PostsComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'admin/posts',
    component: AdminPostsComponent
  },
  {
    path: 'admin/posts/add',
    component: AdminAddPostComponent
  },
  {
    path: 'admin/posts/:id',
    component: AdminViewPostComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
