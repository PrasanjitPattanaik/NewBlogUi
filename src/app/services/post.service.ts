import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddPostRequest } from '../models/add-post.model';
import { CreateUser } from '../models/create-user.model';
import { LoginPostRequest } from '../models/login-model';
import { Post } from '../models/post.model';
import { UpdatePostRequest } from '../models/update-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;
  emailBaseUrl = environment.emailBaseUrl;

  getAllPosts() {
    return this.http.get<Post[]>(this.apiBaseUrl + '/api/Contact');
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.apiBaseUrl + '/api/Contact/' + id);
  }

  updatePost(id: string | undefined, updatePostRequest: UpdatePostRequest): Observable<Post> {
    
    return this.http.put<Post>(this.apiBaseUrl + '/api/Contact/' + id, updatePostRequest);
  }

  addPost(addPostRequest: AddPostRequest): Observable<Post> {
    return this.http.post<Post>(this.apiBaseUrl + '/api/Contact', addPostRequest);
  }

  deletePost(id: string | undefined): Observable<Post> {
    return this.http.delete<Post>(this.apiBaseUrl + '/api/Contact/' + id);
  }
  loginUser(email: string, password: string): Observable<any> {
    return this.http.get<LoginPostRequest>(this.apiBaseUrl + '/' + email + '/' + password);
  }
  createUser(addUserRequest: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(this.apiBaseUrl + '/api/User', addUserRequest);
  }
  sendOtp(email: string, randomOtp: string): Observable<any> {
    return this.http.post<any>(this.emailBaseUrl+'toAddress='+email+'&subject=OTP&content=Your OTP is '+randomOtp ,{});
  }
  // toAddress=prasanjitcool2@gmail.com&content=Checking&subject=Test email2
}
