import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
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
    public updateListTitle: EventEmitter<List> = new EventEmitter<List>();

    @Output()
    public todo: EventEmitter<Todo> = new EventEmitter<Todo>();

    @Output()
    public deleteList: EventEmitter<string> = new EventEmitter<string>();

    public filteredTodos: Todo[] = [];

    public formVisible = false;

    constructor() {}

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        this.filterTodo() 
    }

    onPostTodo(todo: Todo) {
        todo.listId = this.list.id
        this.todo.emit(todo)
    }

    onUpdateListTitle(id: string) {
        console.log({id: id, title: this.list.title})
        this.updateListTitle.emit({id: id, title: this.list.title})
    }

    filterTodo() {
        this.filteredTodos = this.todos.filter((todo) => todo.listId === this.list.id)
        console.log(this.filteredTodos)

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

    onToggleFormView() {
        this.formVisible = !this.formVisible
    }

    onDeleteList(id: string) {
        this.deleteList.emit(id)
    }
}
