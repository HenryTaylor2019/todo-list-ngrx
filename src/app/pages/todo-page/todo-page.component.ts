import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { List } from "src/app/models/list";
import { Todo } from "src/app/models/todo";
import { TodoDialogService } from "src/app/services/todo-dialog.service";
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
  public list$: Observable<List>;
  public isLoading$: Observable<boolean>;
  public todo: Todo;
  public uuid: string;

  constructor(
    private todoFacadeService: TodoFacadeService,
    private store: Store
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
  }

  onCreateList(formData: any): void {
    formData.id = uuid();
    this.store.dispatch(TodoActions.addList({ list: formData }));
  }

  onPostTodo(todo: Todo) {
    todo.id = uuid();
    this.todoFacadeService.dispatch(TodoActions.addTodo({ todo }));
  }

  onArchiveTodo(todo: Todo) {
    this.todoFacadeService.dispatch(TodoActions.archiveTodo({ todo }));
  }

  onOpenDialog(todo: Todo) {
    this.todoFacadeService.dispatch(TodoActions.openTodoModal({ todo }));
  }

  onDeleteTodo(id: string) {
    this.todoFacadeService.dispatch(TodoActions.removeTodo({ id }));
  }

  onUpdateListTitle(list: List) {
    this.todoFacadeService.dispatch(TodoActions.updateListTitle({ list }));
  }

  onDeleteTodoList(id: string) {
    this.todoFacadeService.dispatch(TodoActions.removeList({ id }));
  }

  onDeleteArchivedTodo(id: string) {
    this.todoFacadeService.dispatch(TodoActions.removeTodoFromArchive({ id }));
  }
}
