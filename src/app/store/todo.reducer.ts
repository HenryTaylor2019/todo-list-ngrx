import { createReducer, on } from "@ngrx/store";
import { List } from "../models/list";
import { Todo } from "../models/todo";
import { TodoActions, TodoApiActions } from "./actions/action.types";

export interface TodoState {
    loading: boolean;
    loaded: boolean;
    todoIds: string[];
    todos: Todo[];
    archivedTodos: Todo[];
    lists: List[];
}

export const todoInitialState: TodoState = {
    loading: true,
    loaded: false,
    todoIds: [],
    todos: [],
    archivedTodos: [],
    lists: [],
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
    on(TodoActions.removeTodo, (state) => {
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
            loaded: false,

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
    on(TodoActions.updateTodo, (state, {todo}) => {
        return {
            ...state,
            todos: [...state.todos.filter((a) => (a.id === todo.id ? a.description = todo.description : todo.description)  )]
        };
    }),

    // Archive

    on(TodoActions.archiveTodo, (state, { todo }) => {
        return {
            ...state,
            loading: true,
            loaded: false,
            todos: [
                ...state.todos.filter((item) =>
                    item.id === todo.id
                        ? (item.archived = true)
                        : (item.archived = false)
                ),
            ],
        };
    }),
    on(TodoApiActions.archiveTodoSuccess, (state, { todo }) => {
        return {
            ...state,
            archivedTodos: [...state.archivedTodos, todo],
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
            archivedTodos: [
                ...state.archivedTodos.filter((todo) => todo.id != id),
            ],
        };
    }),
    on(TodoApiActions.fetchAllTodosFromArchive, (state) => {
        return {
            ...state,
            loaded: false,
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
    on(TodoActions.addList, (state, { list }) => {
        return {
            ...state,
            lists: [...state.lists, list],
        };
    }),
    on(TodoApiActions.fetchAllLists, (state) => {
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    }),
    on(TodoApiActions.fetchAllListsSuccess, (state, {lists}) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            lists: [...state.lists, ...lists],
        };
    }),
    on(TodoActions.removeList, (state) => {
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    }),
    on(TodoApiActions.removeListSuccess, (state, {id}) => {
        return {
            ...state,
            loading: true,
            loaded: false,
            lists: [...state.lists.filter((todo) => todo.id != id)],
        };
    }),
    on(TodoActions.removeAllLists, (state) => {
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    }),
    on(TodoApiActions.removeAllListsSuccess, (state) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            lists: []
        };
    }),
    on(TodoActions.updateListTitle, (state, {list}) => {
        return {
            ...state,
            lists: [...state.lists.filter((a) => (a.id === list.id ? a.title = list.title : list.title)  )]
        };
    }),
);
