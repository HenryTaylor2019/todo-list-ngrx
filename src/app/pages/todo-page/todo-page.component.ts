import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "src/app/models/todo";
import { TodoApiService } from "src/app/services/todo-api.service";
import { TodoFacadeService } from "src/app/services/todo-facade.service";
import { TodoFacadeActions } from "src/app/store/actions/action.types";

import { v4 as uuid } from "uuid";

@Component({
    selector: "app-todo-page",
    templateUrl: "./todo-page.component.html",
    styleUrls: ["./todo-page.component.scss"],
})
export class TodoPageComponent implements OnInit {
    public todos$!: Observable<Todo[]>;
    public todo!: Todo;
    public uuid!: string;

    constructor(
        private todoApiService: TodoApiService,
        private todoFacadeService: TodoFacadeService
    ) {}

    ngOnInit(): void {
        this.todos$ = this.todoFacadeService.getTodos();
    }

    onPostTodo(todo: Todo) {
        todo.id = uuid();

        this.todoFacadeService.dispatch(
            TodoFacadeActions.addTodo({ todo: todo })
        );
    }
}
