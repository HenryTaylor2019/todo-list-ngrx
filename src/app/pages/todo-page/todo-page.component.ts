import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Todo } from "src/app/models/todo";
import { TodoApiService } from "src/app/services/todo-api.service";
import { TodoFacadeService } from "src/app/services/todo-facade.service";
import { TodoActions } from "src/app/store/actions/action.types";

import { v4 as uuid } from "uuid";

@Component({
    selector: "app-todo-page",
    templateUrl: "./todo-page.component.html",
    styleUrls: ["./todo-page.component.scss"],
})
export class TodoPageComponent implements OnInit {
    public todos$: Observable<Todo[]>;
    public archivedTodos$: Observable<Todo[]>;
    public todo!: Todo;
    public uuid!: string;

    constructor(
        private todoApiService: TodoApiService,
        private todoFacadeService: TodoFacadeService,
        private http: HttpClient,
        private store: Store
    ) {
        this.todos$ = this.todoFacadeService.getTodos();
        this.archivedTodos$ = this.todoFacadeService.getArchivedTodos();
    }

    ngOnInit(): void {
        this.store.dispatch(TodoActions.getAllTodos());
        this.store.dispatch(TodoActions.getAllArchivedTodos());
    }

    onPostTodo(todo: Todo) {
        todo.id = uuid();

        this.todoFacadeService.dispatch(TodoActions.addTodo({ todo }));
    }

    onArchiveTodo(todo: Todo) {
        this.todoFacadeService.dispatch(
            TodoActions.archiveTodo({ todo })
        );
    }

    onDeleteTodo(id: string) {
        this.todoFacadeService.dispatch(TodoActions.removeTodo({ id }));
    }

    onDeleteArchivedTodo(id: string) {
        this.todoFacadeService.dispatch(TodoActions.removeTodoFromArchive({ id }));
    }
}
