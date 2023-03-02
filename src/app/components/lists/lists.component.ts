import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { List } from "src/app/models/list";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-lists",
    templateUrl: "./lists.component.html",
    styleUrls: ["./lists.component.scss"],
})
export class ListsComponent implements OnInit {
    @Input()
    public todos: Todo[];

    @Input()
    public lists: List[];

    @Output()
    public deleteTodo: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public archiveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

    @Output()
    public deleteList: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public onViewTodoDetails: EventEmitter<Todo> = new EventEmitter<Todo>();

    @Output()
    public deleteArchivedTodo: EventEmitter<string> =
        new EventEmitter<string>();

    @Output()
    public todo: EventEmitter<Todo> = new EventEmitter<Todo>();

    @Output()
    public updateListTitle: EventEmitter<List> = new EventEmitter<List>();

    constructor() {}

    ngOnInit(): void {}

    onPostTodo(todo: Todo) {
      this.todo.emit(todo)
  }

    onArchiveTodo(todo: Todo) {
        this.archiveTodo.emit(todo);
    }

    onOpenDialog(todo: Todo) {
        this.onViewTodoDetails.emit(todo)
    }

    onDeleteTodo(id: string) {
        this.deleteTodo.emit(id)
    }

    onDeleteArchivedTodo(id: string) {
        this.deleteArchivedTodo.emit(id)
    }

    onDeleteList(id: string) {
        this.deleteList.emit(id)
    }

    onUpdateListTitle(list: List) {
        this.updateListTitle.emit(list)
    }
}
