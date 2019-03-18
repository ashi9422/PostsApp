import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {
  PostaData : any;
  constructor(private route: ActivatedRoute ,private userService: UserService) { }

  ngOnInit() {
    // console.log(this.route);
    // console.log(this.route.snapshot.params.id);
    let id = this.route.snapshot.params.id;
    //let id = this.route.snapshot.paramMap.get('id');
    //console.log(this.userService.getPostId(id)); //meka observable ekak. 
    //meken data ganna subscribe krnna ona
    this.userService.getPostId(id).subscribe( data => {
      this.PostaData = data;
      console.log(data);
    });
  }

}
