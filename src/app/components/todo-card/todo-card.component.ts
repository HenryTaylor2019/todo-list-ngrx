import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-todo-card",
    templateUrl: "./todo-card.component.html",
    styleUrls: ["./todo-card.component.scss"],
})
export class TodoCardComponent implements OnInit {
    @Input()
    public todo: Todo;

    @Input()
    public archivedTodo: Todo;

    @Output()
    public onDeleteTodo: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public onArchiveTodo: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public onDeleteArchivedTodo: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public onViewTodoDetails: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {

    }

    onDelete() {
        console.log('qefqe')
        this.onDeleteTodo.emit();
    }

    onArchive() {
        this.onArchiveTodo.emit();
    }

    onViewDetails() {
        this.onViewTodoDetails.emit();
    }

    onDeleteArchived() {
        this.onDeleteArchivedTodo.emit();
    }

    // getColor(type: string) {
    //    return type === 'todo' ?
    //      "container__title-" + this.todo.severityLevel.toLowerCase() :
    //      "container__title-" + this.archivedTodo.severityLevel.toLowerCase() 
    // }
}
