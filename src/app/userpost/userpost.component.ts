import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent  {
  
  posts: any;
  userId: number = 1; 
  bulkAddVisible: boolean = true;
  downloadExcelVisible: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.userPosts(this.userId); 
  }

  userPosts(userId: number): void {
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .subscribe(posts => {
        this.posts = posts;
        this.toggleButtonsVisibility();
      });
  }

  bulkAdd(): void {
   
    console.log();
    this.bulkAddVisible = false;
    this.downloadExcelVisible = true;
  }

  downloadExcel(): void {
  
    console.log();
  }

  toggleButtonsVisibility(): void {
    
    if (this.posts && this.posts.length > 0) {
      this.bulkAddVisible = false;
      this.downloadExcelVisible = true;
    }
  }
}