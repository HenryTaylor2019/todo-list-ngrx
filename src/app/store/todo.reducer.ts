import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo";
import { TodoActions, TodoApiActions } from "./actions/action.types";

export interface TodoState {
    loading: boolean;
    loaded: boolean;
    todoIds: string[];
    todos: Todo[];
}

export const todoInitialState: TodoState = {
    loading: true,
    loaded: false,
    todoIds: [],
    todos: []
};

export interface TodoAppState {
    todoState: TodoState
}

export const todoReducer = createReducer(
    todoInitialState,
    on(TodoActions.addTodo, (state, action) => {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        };
    }),
    on(TodoActions.removeTodo, (state, action) => {
        return {
            ...state,
            loading: true,
            loaded: false,
            todos:[ ...state.todos.filter(todo => todo.id != action.id)]
        };
    }),
    on(TodoApiActions.removeTodoSuccess, (state) => {
        return {
            ...state,
            loading: false,
            loaded: true,
        };
    }),
    on(TodoApiActions.fetchAllTodos, (state, action) => {
        return {
            ...state,
            loading: true
        };
    }),
    on(TodoApiActions.fetchAllTodosSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            todos: [...state.todos, ...action.todos]
        };
    }),
);
