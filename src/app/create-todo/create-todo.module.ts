import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTodoRoutingModule } from './create-todo-routing.module';
import { CreateTodoComponent } from './create-todo.component';

@NgModule({
  declarations: [
    CreateTodoComponent,
  ],
  imports: [
    CommonModule,
    CreateTodoRoutingModule,
    ReactiveFormsModule
  ],
})
export class CreateTodoModule {
}
