import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-todo-card",
    templateUrl: "./todo-card.component.html",
    styleUrls: ["./todo-card.component.scss"],
})
export class TodoCardComponent implements OnInit {
    @Input()
    public todo!: Todo;

    @Output()
    public deleteTodo: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    onDelete() {
        this.deleteTodo.emit(this.todo.id);
    }
}
