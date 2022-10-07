import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { TodoPriority } from '../shared/enums/todo-priority';
import { Todo } from '../shared/interfaces/todo';

type Option = {
  key: string,
  value: string | TodoPriority
}


@Component({
  selector: 'app-todos',
  templateUrl: './create-todo.component.html',
})
export class CreateTodoComponent {

  //** Create form for task */
  createTaskForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    priority: [TodoPriority.LOW, Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private appService: AppService) {}

  //** Prepare enum TodoPriority to select */  
  get options(): Option[] {
   return Object.entries(TodoPriority)
   .filter(([key]) => {
    return isNaN(Number(key))
    }).map(([key, value]) => ({key, value}))
  }

  //** Add task to todos list and clear form */
  onSubmit(): void {
    const {title = '', priority = TodoPriority.LOW} = this.createTaskForm.value;
    this.appService.save({title, priority, date: Date.now(), done: false});
    this.createTaskForm.reset();
  }
}

