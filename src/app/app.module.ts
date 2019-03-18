import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http'
import { from } from 'rxjs';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  { path: 'posts',      component: PostsComponent },
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
