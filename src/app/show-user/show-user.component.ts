import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map } from 'rxjs';
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
  userExits: Boolean = true

  constructor(private service: UserServiceService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.id = param['id'])
    console.log(`ID: ${this.id}`)

    this.service.findById(this.id).subscribe({
      next: data => this.user = data,
      error: err => this.userExits = false
    })
  }

  back(): void {
    this.location.back()
  }

}
