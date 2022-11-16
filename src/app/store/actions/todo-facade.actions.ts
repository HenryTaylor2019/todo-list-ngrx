import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo";

export const addTodo = createAction("[Todo] Add todo", props<{ todo: Todo }>());

export const removeTodo = createAction("[Todo] Remove todo", props<{ id: number }>());
