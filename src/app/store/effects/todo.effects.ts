import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { SoundEffects } from "src/app/constants/sound-effects.enum";
import { List } from "src/app/models/list";
import { Todo } from "src/app/models/todo";
import { SoundService } from "src/app/services/sound.service";
import { TodoApiService } from "src/app/services/todo-api.service";
import { TodoDialogService } from "src/app/services/todo-dialog.service";
import { TodoFacadeService } from "src/app/services/todo-facade.service";
import { TodoActions, TodoApiActions } from "../actions/action.types";

@Injectable()
export class TodoEffects {
  constructor(
    private todoApiService: TodoApiService,
    private actions$: Actions,
    private todoFacadeService: TodoFacadeService,
    private soundService: SoundService,
    private todoDialogService: TodoDialogService
  ) {}

  getAllTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getAllTodos),
      switchMap((action) =>
        this.todoApiService.getTodosFromStorage().pipe(
          map((todos: Todo[]) =>
            TodoApiActions.fetchAllTodosSuccess({ todos: todos })
          ),
          catchError((error) => of(TodoApiActions.fetchAllTodosFailure(error)))
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
            map((todo: Todo) => TodoApiActions.addTodoSuccess({ todo: todo }))
          )
      )
    )
  );

  removeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.removeTodo),
      switchMap(({ id }) =>
        this.todoApiService
          .removeTodoFromStorage(id)
          .pipe(map(() => TodoApiActions.removeTodoSuccess({ id })))
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateTodo),
      switchMap(({ todo }) =>
        this.todoApiService
          .updateTodo(todo)
          .pipe(map(() => TodoApiActions.updateTodoSuccess({ todo })))
      )
    )
  );

  // Lists

  getAllLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getAllLists),
      switchMap(() =>
        this.todoApiService.getListsFromStorage().pipe(
          map((lists: List[]) =>
            TodoApiActions.fetchAllListsSuccess({ lists })
          ),
          catchError((error) => of(TodoApiActions.fetchAllListsFailure(error)))
        )
      )
    )
  );

  addList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addList),
      switchMap((action) =>
        this.todoApiService
          .addListToStorage(action.list)
          .pipe(map((list: List) => TodoApiActions.addListSuccess({ list })))
      )
    )
  );

  addLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addAllLists),
      switchMap((action) =>
        this.todoApiService
          .addAllListsToStorage(action.lists)
          .pipe(
            map((lists: List[]) => TodoApiActions.addAllListsSuccess({ lists }))
          )
      )
    )
  );

  removeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.removeList),
      switchMap(({ id }) =>
        this.todoApiService
          .removeListFromStorage(id)
          .pipe(map(() => TodoApiActions.removeListSuccess({ id })))
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
            TodoApiActions.fetchAllTodosFromArchiveSuccess({
              todos: todos,
            })
          ),
          catchError((error) => of(TodoApiActions.fetchAllTodosFailure(error)))
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
          .pipe(map(() => TodoApiActions.removeTodoFromArchiveSuccess({ id })))
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

  playSoundOnArchiveTodo = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.archiveTodo),
        tap(() => this.soundService.play(SoundEffects.bell, 0.2))
      ),
    { dispatch: false }
  );

  // Modal
  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.removeTodo),
      switchMap(({ id }) =>
        this.todoApiService
          .removeTodoFromStorage(id)
          .pipe(map(() => TodoApiActions.removeTodoSuccess({ id })))
      )
    )
  );

  openTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.openTodoModal),
        tap((todo) => this.todoDialogService.openDialog(todo.todo))
      ),
    { dispatch: false }
  );

  // Lists

  deleteList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.removeList),
      switchMap(({ id }) =>
        this.todoApiService
          .removeListFromStorage(id)
          .pipe(map(() => TodoApiActions.removeListSuccess({ id })))
      )
    )
  );

  updateListTitle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateListTitle),
      switchMap(({ list }) =>
        this.todoApiService
          .updateListTitle(list)
          .pipe(map(() => TodoApiActions.updateListTitleSuccess({ list })))
      )
    )
  );
}

// public openScanModal$ = createEffect(() =>
// this.actions$.pipe(
//     ofType(UserBadgeContactsPageActions.openScanModal),
//     switchMap(() => this.qrScannerModalService.openQrScannerModal()),
//     filter((result) => !!result),
//     withLatestFrom(this.appCoreFacadeService.getAppName()),
//     switchMap(([result, appName]) =>
//         this.userBadgeContactsApiService
//             .scanBadge(appName, result)
//             .pipe(map((person) => UserBadgeContactsPageActions.addContact({ personId: person.id })))
//     ),
//     catchError((error) => of(UserBadgeContactsPageActions.addContactFailure({ error })))
// )
// );
