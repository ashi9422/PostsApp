import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : Http) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
 }
}
