import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  id!: Number
  user: User = new User()
  userExits!: Boolean

  constructor(private service: UserServiceService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.id = param['id'])
    console.log(`ID: ${this.id}`)

    this.service.findById(this.id).subscribe(data => {
      this.user = data
      if(data) this.userExits = true
    })
  }

  ngOnDestroy(): void{
    console.log(JSON.stringify(this.user))
  }

  back(): void {
    this.location.back()
  }

}
