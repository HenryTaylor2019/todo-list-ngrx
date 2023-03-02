import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArchivedListComponent } from "./archived-list/archived-list.component";
import { FormComponent } from "./form/form.component";
import { HeaderComponent } from "./header/header.component";
import { ListsComponent } from './lists/lists.component';
import { SearchComponent } from "./search/search.component";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodoDialogComponent } from "./todo-dialog/todo-dialog.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ListFormComponent } from './list-form/list-form.component';



@NgModule({
    declarations: [
        HeaderComponent,
        SearchComponent,
        TodoCardComponent,
        TodoListComponent,
        FormComponent,
        ArchivedListComponent,
        TodoDialogComponent,
        ListsComponent,
        ListFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSlideToggleModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        MatIconModule
    ],
    exports: [
        HeaderComponent,
        SearchComponent,
        TodoListComponent,
        FormComponent,
        ArchivedListComponent,
        TodoDialogComponent,
        ListsComponent,
        ListFormComponent
    ],
})
export class ComponentsModule {}
