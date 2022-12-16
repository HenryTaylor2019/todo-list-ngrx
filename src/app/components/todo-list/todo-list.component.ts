import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
    @Input()
    public todos: Todo[];

    @Output()
    public deleteTodo: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public archiveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();


    @Output()
    public onViewTodoDetails: EventEmitter<Todo> = new EventEmitter<Todo>();


    @Output()
    public deleteArchivedTodo: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    onDeleteTodo(id: string) {
        this.deleteTodo.emit(id);
    }

    onArchiveTodo(todo: Todo) {
        this.archiveTodo.emit(todo);
    }

    onViewDetails(todo: Todo) {
        this.onViewTodoDetails.emit(todo);
    }

    onDeleteArchivedTodo(id: string) {
        this.deleteArchivedTodo.emit(id);
    }
}
