import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from './form/form.component';
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    declarations: [HeaderComponent, SearchComponent, TodoCardComponent, TodoListComponent, FormComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [HeaderComponent, SearchComponent, TodoListComponent, FormComponent]
})
export class ComponentsModule {}
