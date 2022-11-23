import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { Todo } from "src/app/models/todo";
import { TodoApiService } from "src/app/services/todo-api.service";
import { TodoActions, TodoApiActions } from "../actions/action.types";

@Injectable()
export class TodoEffects {
    constructor(
        private todoApiService: TodoApiService,
        private actions$: Actions
    ) {}

    getAllTodosFromServer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.getAllTodos),
            exhaustMap((action) =>
                this.todoApiService.getTodosFromStorage().pipe(
                    map((todos: Todo[]) =>
                        TodoApiActions.fetchAllTodosSuccess({ todos: todos })
                    ),
                    catchError((error) =>
                        of(TodoApiActions.fetchAllTodosFailure(error))
                    )
                )
            )
        )
    );

    addTodosToServer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.addAllTodos),
            exhaustMap((action) =>
                this.todoApiService
                    .addAllTodosToStorage(action.todos)
                    .pipe(
                        map((todos: Todo[]) =>
                            TodoApiActions.addAllTodosSuccess({ todos: todos })
                        )
                    )
            )
        )
    );

    addTodoToServer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.addTodo),
            exhaustMap((action) =>
                this.todoApiService
                    .addTodoToStorage(action.todo)
                    .pipe(
                        map((todo: Todo) =>
                            {
                                return TodoApiActions.addTodoSuccess({ todo: todo })}
                        )
                    )
            )
        )
    );

    removeToDoFromServer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.removeTodo),
            exhaustMap((action) =>
                this.todoApiService
                    .removeTodoFromStorage(action.id)
                    .pipe(map((id) => TodoApiActions.removeTodoSuccess()))
            )
        )
    );

    removeAllToDosFromServer$ = createEffect(() =>
    this.actions$.pipe(
        ofType(TodoActions.removeTodo),
        exhaustMap((action) =>
            this.todoApiService
                .removeTodoFromStorage(action.id)
                .pipe(map((id) => TodoApiActions.removeTodoSuccess()))
        )
    )
);
}
