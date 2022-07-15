import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user!: User

  constructor(private service: UserServiceService, private location: Location) { }

  ngOnInit(): void {
    this.user = new User()
  }

  create(): void {
    const body = {
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email
    }

    console.log(`Trying to POST data: ${JSON.stringify(body)}`);

    this.service.create(body).subscribe(response => console.log)
  }

  back(): void {
    this.location.back()
  }
}