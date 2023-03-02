import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TodoDialogComponent } from "../components/todo-dialog/todo-dialog.component";
import { Todo } from "../models/todo";
import { TodoActions } from "../store/actions/action.types";
import { TodoFacadeService } from "./todo-facade.service";

@Injectable({
    providedIn: "root",
})
export class TodoDialogService {
    constructor(
        public dialog: MatDialog,
        private todoFacadeService: TodoFacadeService
    ) {}

    public openDialog(todo: Todo){
        const dialogRef = this.dialog.open(TodoDialogComponent, {
            data: {
                todo,
                height: '5000px',
                width: '2000px'
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (todo.id === result) {
                this.todoFacadeService.dispatch(
                    TodoActions.removeTodo({ id: result })
                );
            }
            console.log(`Dialog result: ${result}`);
        });
    }
}
