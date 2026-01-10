import { Component } from '@angular/core';
import { UserDetails } from '../../../core/models/user-details';
import { ManageUsers } from '../../../core/services/manage-users';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-details-page',
  imports: [AsyncPipe],
  templateUrl: './user-details-page.html',
  styleUrl: './user-details-page.css',
})
export class UserDetailsPage {
  user$! : Observable <UserDetails>
  userId:number = 0
  constructor(private _manageUsers: ManageUsers, private _ActivatedRouter: ActivatedRoute, private _router: Router){}

  ngOnInit(): void {
    this._ActivatedRouter.paramMap.subscribe((param)=>{
      this.userId = Number(param.get('id'))
      this.user$ =  this._manageUsers.getUserById(this.userId)
    })
  }

  goBack(){
    this._router.navigate(['users'])
  }

}
