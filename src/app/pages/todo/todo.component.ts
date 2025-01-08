import { Component, ContentChildren, EventEmitter, Input, LOCALE_ID, Output, Pipe } from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import spanish from '@angular/common/locales/es';
import { InputComponent } from '../../components/input/input.component';
registerLocaleData(spanish)

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input({required: true}) todoData!: NTodo.TodoData;
  // @Input() first!:boolean;
  // @Input() last!:boolean;
  // @Input() odd!: boolean;
  // @Input() even!: boolean;
  @Output() onClickIcon=new EventEmitter<NTodo.TodoData>();
  @ContentChildren(InputComponent) projectContent?:InputComponent;
  get priority():string{
    switch (this.todoData.priority) {
      case NTodo.Priority.LOW:
        return NTodo.PriorityText.LOW
        break;
      case NTodo.Priority.MEDIUM:
        return NTodo.PriorityText.MEDIUM;
        break;
          
      default:
        return NTodo.PriorityText.HIGH;
        break;
    }
    
  }
  get progress(){
    return this.todoData.progress*100;
  }
  get range(){
    if(this.progress>0 && this.progress<=NTodo.Range.LOW){
      return NTodo.RangeText.LOW
    }else if(this.progress>NTodo.Range.LOW && this.progress<=NTodo.Range.MEDIUM){
      return NTodo.RangeText.MEDIUM;
    }else{
      return NTodo.RangeText.HIGH;
    }
  }
  selectProjectContent(){
    console.log(this.projectContent)
  }
}
