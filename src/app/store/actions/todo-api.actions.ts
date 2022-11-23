import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo";

export const addTodo = createAction("[Todo] Add todo to server");

export const addTodoSuccess = createAction(
    "[Todo] Add todo to server Succcess",
    props<{ todo: Todo }>()
);

export const addAllTodos = createAction("[Todo] Add all todos to server");

export const addAllTodosSuccess = createAction(
    "[Todo] Add all todos to server success",
    props<{ todos: Todo[] }>()
);

export const removeTodo = createAction(
    "[Todo] Remove todo from server",
    props<{ id: string }>()

);

export const removeTodoSuccess = createAction(
    "[Todo] Remove todo from server Success",
    props<{ id: string }>()
);

export const fetchAllTodos = createAction("[Todo] Fetch all todos from server");

export const fetchAllTodosSuccess = createAction(
    "[Todo] Fetch all todos from server success",
    props<{ todos: Todo[] }>()
);

export const fetchAllTodosFailure = createAction(
    "[Todo] Fetch all todos from server Failed",
    props<any>()
);


// Archived

export const archiveTodo = createAction("[Todo] Add todo to server");

export const archiveTodoSuccess = createAction(
    "[Todo] Add todo to archive Succcess",
    props<{ todo: Todo }>()
);

export const archiveAllTodos = createAction("[Todo] Add all todos to archive");

export const archiveAllTodosSuccess = createAction(
    "[Todo] Add all todos to archive success",
    props<{ todos: Todo[] }>()
);

export const removeTodoFromArchive = createAction(
    "[Todo] Remove todo from archive",
    props<{ id: string }>()

);

export const removeTodoFromArchiveSuccess = createAction(
    "[Todo] Remove todo from archive Success",
    props<{ id: string }>()
);

export const fetchAllTodosFromArchive = createAction("[Todo] Fetch all todos from archive");

export const fetchAllTodosFromArchiveSuccess = createAction(
    "[Todo] Fetch all todos from archive success",
    props<{ todos: Todo[] }>()
);

export const fetchAllTodoFromArchivesFailure = createAction(
    "[Todo] Fetch all todos from archive Failed",
    props<any>()
);
