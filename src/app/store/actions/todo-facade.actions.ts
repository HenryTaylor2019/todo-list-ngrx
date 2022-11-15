import { createAction, props } from "@ngrx/store";

export const addTodo = createAction("[Todo] Add todo", props<{ id: number }>());

export const removeTodo = createAction("[Todo] Remove todo", props<{ id: number }>());
