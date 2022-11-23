import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Todo } from "src/app/models/todo";
import { TodoApiService } from "src/app/services/todo-api.service";
import { TodoFacadeService } from "src/app/services/todo-facade.service";
import { TodoActions, TodoApiActions } from "../actions/action.types";

@Injectable()
export class TodoEffects {
    constructor(
        private todoApiService: TodoApiService,
        private actions$: Actions,
        private todoFacadeService: TodoFacadeService
    ) {}

    getAllTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.getAllTodos),
            switchMap((action) =>
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

    addTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.addAllTodos),
            switchMap((action) =>
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

    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.addTodo),
            switchMap((action) =>
                this.todoApiService
                    .addTodoToStorage(action.todo)
                    .pipe(
                        map((todo: Todo) =>
                            TodoApiActions.addTodoSuccess({ todo: todo })
                        )
                    )
            )
        )
    );

    removeToDo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.removeTodo),
            switchMap(({ id }) =>
                this.todoApiService
                    .removeTodoFromStorage(id)
                    .pipe(map(() => TodoApiActions.removeTodoSuccess({ id })))
            )
        )
    );

    // Archive

    getAllArchivedTodos$ = createEffect(() =>
    this.actions$.pipe(
        ofType(TodoActions.getAllArchivedTodos),
        switchMap((action) =>
            this.todoApiService.getTodosFromArchiveStorage().pipe(
                map((todos: Todo[]) =>
                    TodoApiActions.fetchAllTodosFromArchiveSuccess({ todos: todos })
                ),
                catchError((error) =>
                    of(TodoApiActions.fetchAllTodosFailure(error))
                )
            )
        )
    )
);

    addTodoToArchived$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.archiveTodo),
            switchMap(({ todo }) =>
                this.todoApiService
                    .addTodoToArchiveStorage(todo)
                    .pipe(
                        switchMap((todo: Todo) => [
                            TodoApiActions.archiveTodoSuccess({ todo }),
                            TodoActions.removeTodo({ id: todo.id }),
                        ])
                    )
            )
        )
    );

    removeTodoFromArchived$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.removeTodoFromArchive),
            switchMap(({ id }) =>
                this.todoApiService
                    .removeTodoFromArchiveStorage(id)
                    .pipe(
                        map(() =>
                            TodoApiActions.removeTodoFromArchiveSuccess({ id })
                        )
                    )
            )
        )
    );

    // addTodosToArchiveServer$ = createEffect(() =>
    // this.actions$.pipe(
    //     ofType(TodoActions.archiveAllTodos),
    //     switchMap(({ todos }) =>
    //         this.todoApiService.addTodosToArchiveStorage(todos).pipe(
    //             switchMap((todo: Todo) =>
    //                 [
    //                     TodoApiActions.archiveTodoSuccess({ todo }),
    //                     TodoActions.removeTodos({ id: todo.id})
    //                 ]
    //             )
    //         )
    //     )
    // )
    // );

    // How do bulk delete things
    // deleteAllTodos$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(TodoActions.deleteAllTodos),
    //         withLatestFrom(this.todoFacadeService.getTodos()),
    //         switchMap((todos) =>
    //             todos.map((todo) => TodoActions.removeTodo({ id: todo.id }))
    //         )
    //     )
    // );

    // How to bulk archive things
    // archiveAllTodos$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(TodoActions.archiveAllTodos),
    //         withLatestFrom(this.todoFacadeService.getTodos()),
    //         switchMap((todos) =>
    //             todos.map((todo) => TodoActions.archiveTodo({ id: todo.id }))
    //         )
    //     )
    // );

    // removeToDoFromArchiveServer$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(TodoActions.removeTodo),
    //         switchMap((action) =>
    //             this.todoApiService
    //                 .removeTodoFromStorage(action.id)
    //                 .pipe(map((id) => TodoApiActions.removeTodoSuccess()))
    //         )
    //     )
    // );
}
