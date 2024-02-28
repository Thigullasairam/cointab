import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  users: any[] = [];

  constructor(private http: HttpClient,private route:Router) { }

  getAllUsers(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.users = users.map(user => ({ ...user, existsInDatabase: false }));
      });
  }

  addUser(user: any): void {
    console.log('Adding user', user);
    user.existsInDatabase = true;
  }

  openUser(user: any): void {
    this.route.navigateByUrl("userpost");
  }

  isUserAdded(user: any): boolean {
    return user.existsInDatabase;
  }
}