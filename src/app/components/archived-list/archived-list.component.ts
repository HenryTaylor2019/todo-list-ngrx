import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-archived-list",
    templateUrl: "./archived-list.component.html",
    styleUrls: ["./archived-list.component.scss"],
})
export class ArchivedListComponent implements OnInit {
    @Input()
    public archivedTodos: Todo[];

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

    onViewDetails(todo: Todo) {
        this.onViewTodoDetails.emit(todo);
    }

    onDeleteArchivedTodo(id: string) {
        this.deleteArchivedTodo.emit(id);
    }
}
