import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo";

export const addTodo = createAction(
    "[Todo] Add todo", 
    props<{ todo: Todo }>()
);

export const removeTodo = createAction(
    "[Todo] Remove todo",
    props<{ id: number }>()
);

export const fetchAllTodos = createAction("[Todo] Fetch all todos");

export const fetchAllTodosSuccess = createAction(
    "[Todo] Fetch all todos",
    props<{ todos: Todo[] }>()
);
