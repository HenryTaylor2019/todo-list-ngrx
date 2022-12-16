import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { SoundEffects } from "src/app/constants/sound-effects.enum";
import { Todo } from "src/app/models/todo";
import { SoundService } from "src/app/services/sound.service";
import { TodoApiService } from "src/app/services/todo-api.service";
import { TodoFacadeService } from "src/app/services/todo-facade.service";
import { TodoActions, TodoApiActions } from "../actions/action.types";

@Injectable()
export class TodoEffects {
    constructor(
        private todoApiService: TodoApiService,
        private actions$: Actions,
        private todoFacadeService: TodoFacadeService,
        private soundService: SoundService
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

    // How do bulk delete things
    // deleteAllTodos$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(TodoActions.removeAllTodos),
    //         withLatestFrom(this.todoFacadeService.getTodos()),
    //         switchMap((todos: Todo[]) =>
    //             todos.map((todo) => TodoActions.removeTodo({ id: todo.id }))
    //         )
    //     )
    // );

    // How to bulk archive things
    // archiveAllTodos$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(TodoActions.archiveAllTodos),
    //         withLatestFrom(this.todoFacadeService.getTodos()),
    //         switchMap((todos: Todo[]) =>
    //             todos.map((todo) => TodoActions.archiveTodo({ todo: todo }))
    //         )
    //     )
    // );


    // Sound FX

    playSoundOnArchiveTodo = createEffect(() => 
      this.actions$.pipe(
        ofType(TodoActions.archiveTodo),
        tap(() => this.soundService.play(SoundEffects.bell, 0.2))
      ),
      { dispatch: false }
    )
}
