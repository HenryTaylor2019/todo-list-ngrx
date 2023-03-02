import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Todo } from "src/app/models/todo";
import { TodoFacadeService } from "src/app/services/todo-facade.service";
import { TodoActions } from "src/app/store/actions/action.types";

@Component({
    selector: "app-todo-dialog",
    templateUrl: "./todo-dialog.component.html",
    styleUrls: ["./todo-dialog.component.scss"],
})
export class TodoDialogComponent implements OnInit {
    public todo!: Todo;
    public detailsForm!: FormGroup;
    public details: Partial<Todo>;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<TodoDialogComponent>,
        private todoFacadeService:TodoFacadeService
    ) {
        this.todo = this.data.todo;
    }

    ngOnInit(): void {
        this.detailsForm = new FormGroup({
            description: new FormControl(""),
        });
        this.dialogRef.updateSize("60%", "60%");
    }

    onSubmit(todo: Todo) {
        todo.description = this.detailsForm.value.description;
        this.todoFacadeService.dispatch(TodoActions.updateTodo({todo}))
        this.detailsForm.reset();
    }

    onDelete() {
        this.dialogRef.close(this.todo.id);
    }

    onClose() {}

    getColor(type: string) {
        console.log("container__header-" + type)
        return "container__header-" + type
    }
}
