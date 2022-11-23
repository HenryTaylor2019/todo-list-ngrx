import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo";

export const getAllTodos = createAction("[Todo] Get all todos from store");

export const addTodo = createAction("[Todo] Add todo to store", props<{ todo: Todo }>());

export const addAllTodos = createAction("[Todo] Add All todos to store", props<{ todos: Todo[] }>());

export const removeTodo = createAction("[Todo] Remove todo from store", props<{ id: string }>());

export const removeAllTodos = createAction("[Todo] Remove alls todo from store");

// Archive

export const getAllArchivedTodos = createAction("[Todo] Get all todos from archive");

export const archiveTodo = createAction("[Todo] Add todo to archive", props<{ todo: Todo }>());

export const archiveAllTodos = createAction("[Todo] Add All todos to archive", props<{ ids: string[] }>());

export const removeTodoFromArchive = createAction("[Todo] Remove todo from archive", props<{ id: string }>());

export const removeAllTodosfromArchive = createAction("[Todo] Remove alls todo from archive");

