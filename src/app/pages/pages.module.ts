import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { TodoPageComponent } from './todo-page/todo-page.component';



@NgModule({
  declarations: [TodoPageComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [TodoPageComponent]
})
export class PagesModule { }
