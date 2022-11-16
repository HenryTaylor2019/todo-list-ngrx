import { Component, Input, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
    @Input()
    public todos!: Todo[];
    
    constructor() {}

    ngOnInit(): void {
      console.log(this.todos)
    }
}
