import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    declarations: [HeaderComponent, SearchComponent, TodoCardComponent, TodoListComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, SearchComponent, TodoListComponent]
})
export class ComponentsModule {}
