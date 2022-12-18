import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { List } from "src/app/models/list";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit, OnChanges {
    @Input()
    public todos: Todo[];

    @Input()
    public list: List;

    @Output()
    public deleteTodo: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public archiveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

    @Output()
    public onViewTodoDetails: EventEmitter<Todo> = new EventEmitter<Todo>();

    @Output()
    public deleteArchivedTodo: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public todo: EventEmitter<Todo> = new EventEmitter<Todo>();

    public filteredTodos: Todo[] = [];

    constructor() {}

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.filterTodo() 

    }

    onPostTodo(todo: Todo) {
        todo.listId = this.list.id

        this.todo.emit(todo)
    }

    filterTodo() {
        this.filteredTodos = this.todos.filter((todo) => todo.listId === this.list.id)
    }

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
