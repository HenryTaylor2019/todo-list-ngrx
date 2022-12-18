import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { List } from "src/app/models/list";
import { Todo } from "src/app/models/todo";
import { DialogService } from "src/app/services/dialog-service";
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
    public lists$: Observable<List[]>;
    public isLoading$: Observable<boolean>;
    public todo!: Todo;
    public uuid!: string;
    public listForm: FormGroup;

    constructor(
        private todoFacadeService: TodoFacadeService,
        private store: Store,
        private todoDialogService: DialogService
    ) {
        this.todos$ = this.todoFacadeService.getTodos();
        this.archivedTodos$ = this.todoFacadeService.getArchivedTodos();
        this.lists$ = this.todoFacadeService.getLists();
        this.isLoading$ = this.todoFacadeService.getLoadingState();
    }

    ngOnInit(): void {
        this.store.dispatch(TodoActions.getAllTodos());
        this.store.dispatch(TodoActions.getAllArchivedTodos());
        this.store.dispatch(TodoActions.getAllLists());

        this.listForm = new FormGroup({
            title: new FormControl("", [Validators.required]),
        });
    }

    onCreateList(): void {
        this.listForm.value.id = uuid();
        if (this.listForm.valid) {
            this.store.dispatch(TodoActions.addList({ list: this.listForm.value }));
            this.listForm.reset();
        }
    }

    onPostTodo(todo: Todo) {
        todo.id = uuid();
        this.todoFacadeService.dispatch(TodoActions.addTodo({ todo }));
    }

    onArchiveTodo(todo: Todo) {
        this.todoFacadeService.dispatch(TodoActions.archiveTodo({ todo }));
    }

    onRemoveAllLists() {
        this.todoFacadeService.dispatch(TodoActions.removeAllLists());
    }


    onOpenDialog(todo: Todo) {
        this.todoDialogService.openDialog(todo);
    }

    onDeleteTodo(id: string) {
        this.todoFacadeService.dispatch(TodoActions.removeTodo({ id }));
    }

    onDeleteArchivedTodo(id: string) {
        this.todoFacadeService.dispatch(
            TodoActions.removeTodoFromArchive({ id })
        );
    }
}
