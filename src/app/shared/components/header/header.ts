import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() OnSearchById : EventEmitter<string>

  constructor(){
    this.OnSearchById = new EventEmitter<string>()
  }

  search(event:any){
    this.OnSearchById.emit(event.target.value)
  }

}
