import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-todo-dialog",
    templateUrl: "./todo-dialog.component.html",
    styleUrls: ["./todo-dialog.component.scss"],
})
export class TodoDialogComponent implements OnInit {
    public todo!: Todo;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      this.todo = this.data.todo
    }

    ngOnInit(): void {
        console.log("data", this.data);
    }
}
