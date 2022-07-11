import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  users!: User[]
  user: User = new User()
  currentRate = 5

  public itemsParent = ["first", "second", "third", "forth", "fifth"]

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      console.log(data)
      this.users = data
    })
  }

  userDetails(id: number) {
    this.router.navigate(['users', id])
    console.log(id)
  }

  addItem(value: string) {
    this.itemsParent.push(value)
  }

}
