import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { InputComponent } from "./components/input/input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todoData=TODO_DATA.filter(item=>item.id<4);
  //todoData:NTodo.TodoData[]=[];
  //@ViewChild(TodoComponent,{read: ElementRef}) todo?:ElementRef;
  @ViewChildren(TodoComponent,{read: ElementRef}) todo?:ElementRef;
  constructor(){
    
  }
  getTodoInfo(val:NTodo.TodoData){
    console.log(val);
  }
  orderData(){
    this.todoData.sort((a,b)=>a.priority-b.priority)
  }
  selectToDo(){
    console.log(this.todo)
  }
}
