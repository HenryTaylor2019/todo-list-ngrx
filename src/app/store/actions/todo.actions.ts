import { createAction, props } from "@ngrx/store";
import { List } from "src/app/models/list";
import { Todo } from "src/app/models/todo";

export const getAllTodos = createAction("[Todo] Get all todos from store");

export const addTodo = createAction("[Todo] Add todo to store", props<{ todo: Todo }>());

export const addAllTodos = createAction("[Todo] Add All todos to store", props<{ todos: Todo[] }>());

export const removeTodo = createAction("[Todo] Remove todo from store", props<{ id: string }>());

export const updateTodo = createAction("[Todo] update todo in store", props<{ todo: Todo }>());

// export const removeTodo = createAction("[Todo] Remove todo from store", props<{ id: string }>());


export const removeAllTodos = createAction("[Todo] Remove alls todo from store");

// Archive

export const getAllArchivedTodos = createAction("[Todo] Get all todos from archive");

export const archiveTodo = createAction("[Todo] Add todo to archive", props<{ todo: Todo }>());

export const archiveAllTodos = createAction("[Todo] Add All todos to archive", props<{ ids: string[] }>());

export const removeTodoFromArchive = createAction("[Todo] Remove todo from archive", props<{ id: string }>());

export const removeAllTodosfromArchive = createAction("[Todo] Remove alls todo from archive");



// List

export const addList = createAction("[List] Create new list", props<{ list: List }>());

export const getAllLists = createAction("[List] Get all lists from store");

export const addAllLists = createAction("[List] Add All lists to store", props<{ lists: List[] }>());

export const removeList = createAction("[List] Remove list from store", props<{ id: string }>());

export const removeAllLists = createAction("[List] Remove all lists from store");

export const updateListTitle = createAction("[List] update list title", props<{ list: List }>());


// Modal

export const openTodoModal = createAction("[Modal] Open Todo Modal", props<{ todo: Todo }>());
