import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id:1,description:"Coding"},
    {id:2,description:"Dancing"},
    {id:3,description:"singing"},
  ]
  // todo ={
  //   id:1,
  //   description:"Hello World"
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
