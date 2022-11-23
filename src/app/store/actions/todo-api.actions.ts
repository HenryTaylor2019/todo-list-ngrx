import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo";

export const addTodo = createAction("[Todo] Add todo to server");

export const addTodoSuccess = createAction(
    "[Todo] Add todo to server Succcess",
    props<{ todo: Todo }>()
);

export const addAllTodos = createAction("[Todo] Add all todos to server");

export const addAllTodosSuccess = createAction(
    "[Todo] Add all todos success",
    props<{ todos: Todo[] }>()
);

export const removeTodo = createAction(
    "[Todo] Remove todo from server",
    props<{ id: string }>()

);

export const removeTodoSuccess = createAction(
    "[Todo] Remove todo from server Success",
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
