import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoDialogComponent } from '../components/todo-dialog/todo-dialog.component';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  openDialog(todo: Todo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      data: {
        todo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
