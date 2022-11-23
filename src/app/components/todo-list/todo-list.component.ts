import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
    @Input()
    public todos!: Todo[];

    @Output()
    public deleteTodo: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {
        console.log(this.todos);
    }

    onDeleteTodo(id: string) {
      this.deleteTodo.emit(id)
    }
}
