import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo";
import { TodoActions, TodoApiActions } from "./actions/action.types";

export interface TodoState {
    loading: boolean;
    loaded: boolean;
    todoIds: string[];
    todos: Todo[];
    archivedTodos: Todo[];
}

export const todoInitialState: TodoState = {
    loading: true,
    loaded: false,
    todoIds: [],
    todos: [],
    archivedTodos: [],
};

export interface TodoAppState {
    todoState: TodoState;
}

export const todoReducer = createReducer(
    todoInitialState,
    on(TodoActions.addTodo, (state, action) => {
        return {
            ...state,
            todos: [...state.todos, action.todo],
        };
    }),
    on(TodoActions.removeTodo, (state, action) => {
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    }),
    on(TodoApiActions.removeTodoSuccess, (state, { id }) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            todos: [...state.todos.filter((todo) => todo.id != id)],
        };
    }),
    on(TodoApiActions.fetchAllTodos, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(TodoApiActions.fetchAllTodosSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            todos: [...state.todos, ...action.todos],
        };
    }),

    // Archive

    on(TodoActions.archiveTodo, (state) => {
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    }),
    on(TodoApiActions.archiveTodoSuccess, (state, { todo }) => {
        return {
            ...state,
            archivedTodos: [...state.archivedTodos, todo]
        };
    }),
    on(TodoActions.removeTodo, (state) => {
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    }),
    on(TodoApiActions.removeTodoFromArchiveSuccess, (state, { id }) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            archivedTodos: [...state.archivedTodos.filter((todo) => todo.id != id)],
        };
    }),
    on(TodoApiActions.fetchAllTodosFromArchive, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(TodoApiActions.fetchAllTodosFromArchiveSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            archivedTodos: [...state.archivedTodos, ...action.todos],
        };
    }),
);
