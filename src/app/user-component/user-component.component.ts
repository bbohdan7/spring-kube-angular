import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  // animations: [
  //   trigger('upDown', [
  //     state('up', style({
        
  //     })),
  //     state('down', style({
        
  //     })),
  //     transition('up => down', [ animate("2s") ]),
  //     transition('down => up', [ animate("1s") ])
  //   ])
  // ]
})
export class UserComponentComponent implements OnInit {

  users!: User[]
  selectedUser: User = new User()
  currentRate = 5
  isAnimate: boolean = true
  userDeleted!: boolean

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers()
    console.log(`Reinit of the component`)
  }

  ngAfterViewInit() {
    setInterval(() => this.fetchUsers(), 3000)
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(data => {
      console.log(data)
      this.users = data
    })
  }

  userDetails(id: number) {
    this.router.navigate(['users', id])
    console.log(id)
  }

  selectUser(usr: User) {
    this.selectedUser = usr
  }

  deleteUser(): void {
    this.userService.delete(this.selectedUser.id).subscribe(response => console.log(`Error while deleting: ${response}`))
    this.fetchUsers()
    this.userDeleted = true
  }

}
