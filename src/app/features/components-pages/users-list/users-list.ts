import { Component, OnInit } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../store/users/users.actions';
import { userState } from '../../store/users/users.state';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, Observable, of, startWith, switchMap } from 'rxjs';
import { Highlight } from "../../../shared/directives/highlight";
import { ManageUsers } from '../../../core/services/manage-users';
import { Router } from '@angular/router';



@Component({
  selector: 'app-users-list',
  imports: [Header, AsyncPipe, Highlight],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList implements OnInit{
  search$ = new BehaviorSubject<string>('');
  page = 1;
  limit = 10
  isSearch = false;
  users$!: Observable<userState | null>;

  constructor(private _store: Store<{users:userState}>,
              private _ManagemeUsers: ManageUsers,
              private _router:Router){

  }
  ngOnInit(): void {
    
    this.loadUsers()
   
    this.users$=this.search$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((id)=>{
        if(id && id.trim() != ''){
          this.isSearch=true;
          return this._ManagemeUsers.getUserById(+id).pipe(
                map(user => ({
                  users: user ? [user] : [],
                  loading: false,
                  total: user ? 1 : 0,
                  error: null,
                  skip: 0,
                  limit: this.limit
                } as userState )),

                startWith({
                  loading:true,
                   users:[],
                   total:0,
                   error: null,
                   skip: 0,
                   limit: this.limit
                  } as userState),
                  
                catchError(() => of({
                  users: [],
                  loading: false,
                  total: 0,
                  error: 'User not found',
                  skip: 0,
                  limit: this.limit
                } as userState))
          );
        } else{
          this.isSearch=false;
          return this._store.select("users")
        }

       }),
       
       startWith(null)
    )

    this.search$.next('');
  }

  loadUsers(){
    this._store.dispatch(selectAllUsers({page:this.page,limit:this.limit}))
  }
  next(){
    this.page += 1;
    this.loadUsers()
  }
  prev(){
    this.page -= 1;
    this.loadUsers()
  }
  

  onSearch(id:string){
    this.search$.next(id)
  }

  showDetails(id:number){
    this._router.navigate(['user',id])
  }
}
