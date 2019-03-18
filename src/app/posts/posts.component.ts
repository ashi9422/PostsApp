import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  names = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ];

  constructor(private userService : UserService) { }

  ngOnInit() {
  this.userService.getPosts().subscribe( data => {
      this.posts = data.json();
      //console.log(this.posts);
    },
    error => {
      console.log(" Not working url" + error);
    });
  }

}
