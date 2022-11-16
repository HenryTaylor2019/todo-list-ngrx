import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo";
import { TodoApiActions, TodoFacadeActions } from "./actions/action.types";

export interface TodoState {
    loading: boolean;
    loaded: boolean;
    todoIds: number[];
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
    on(TodoFacadeActions.addTodo, (state, action) => {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        };
    }),
    on(TodoFacadeActions.removeTodo, (state, action) => {
        return {
            ...state,
            todoIds:[ ...state.todoIds.filter(id => id === action.id)]
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
