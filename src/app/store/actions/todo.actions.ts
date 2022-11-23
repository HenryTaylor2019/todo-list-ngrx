import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo";

export const getAllTodos = createAction("[Todo] Get all todos from store");

export const addTodo = createAction("[Todo] Add todo to store", props<{ todo: Todo }>());

export const addAllTodos = createAction("[Todo] Add All todos to store", props<{ todos: Todo[] }>());

export const removeTodo = createAction("[Todo] Remove todo from store", props<{ id: string }>());

export const removeAllTodos = createAction("[Todo] Remove alls todo from store");
