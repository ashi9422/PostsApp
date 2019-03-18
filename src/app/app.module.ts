import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { UserService } from './services/user.service';
import { OnePostComponent } from './one-post/one-post.component';

const appRoutes: Routes = [
  { path: 'posts',      component: PostsComponent },
  { path: 'posts/:id',      component: OnePostComponent },
  { path: 'comments',      component: CommentsComponent },
  { path: '',      component: HeaderComponent },
  
  // { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    CommentsComponent,
    OnePostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
