import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : User[];
  start:number;
  len:number;

  constructor(private service : UserService) {
    
   }

  ngOnInit() {
   this.service.getUsers().subscribe(res =>{
     this.users = res;
   });
   this.len = 4;
   this.start = 0;
  }

  pager(page:number){
    this.start = this.len * page;
  }
}
