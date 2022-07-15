import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id!: Number
  user: User = new User()
  userExists: Boolean = false

  constructor(private service: UserServiceService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.id = param['id'])
    
    this.service.findById(this.id).subscribe(response => {
      this.user = response

      if(response) this.userExists = true
    })
  }

  update() {
    let body = {
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email
    }

    this.service.update(this.id, body).subscribe(data => {  })
  }

  printUserInfo(): void {
    console.log("Now Updating user looks like: " + JSON.stringify(this.user))
  }

  back(): void {
    this.location.back()
  }

}
