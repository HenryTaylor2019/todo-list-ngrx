import { createAction, props } from "@ngrx/store";
import { List } from "src/app/models/list";
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
    "[Todo] Remove todo from server");

export const removeTodoSuccess = createAction(
    "[Todo] Remove todo from server Success",
    props<{ id: string }>()
);

export const updateTodo = createAction(
    "[Todo] Update todo in server");

export const updateTodoSuccess = createAction(
    "[Todo] Update todo in server Success",
    props<{ todo: Todo }>()
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

// Lists

export const addList = createAction("[List] Add list to server");

export const addListSuccess = createAction(
    "[List] Add list to server Succcess",
    props<{ list: List }>()
);

export const addAllLists = createAction("[List] Add all lists to server");

export const addAllListsSuccess = createAction(
    "[List] Add all lists to server success",
    props<{ lists: List[] }>()
);


export const removeListSuccess = createAction(
    "[List] Remove list from server Success",
    props<{ id: string }>()
);

export const fetchAllLists = createAction("[List] Fetch all lists from server");

export const fetchAllListsSuccess = createAction(
    "[List] Fetch all lists from server success",
    props<{ lists: List[] }>()
);

export const updateListTitle = createAction("[List] Update List title on server")
;

export const updateListTitleSuccess = createAction(
    "[List] Update List title on server success",
    props<{ list: List }>()
);

export const fetchAllListsFailure = createAction(
    "[List] Fetch all lists from server Failed",
    props<any>()
);

export const removeAllListsSuccess = createAction(
    "[List] Remove all lists from server success");

export const removeAllListsFailure = createAction(
    "[List] Remove all lists from server Failed");

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

export const fetchAllTodosFromArchive = createAction(
    "[Todo] Fetch all todos from archive"
);

export const fetchAllTodosFromArchiveSuccess = createAction(
    "[Todo] Fetch all todos from archive success",
    props<{ todos: Todo[] }>()
);

export const fetchAllTodoFromArchivesFailure = createAction(
    "[Todo] Fetch all todos from archive Failed",
    props<any>()
);
