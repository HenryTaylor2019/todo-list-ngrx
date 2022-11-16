import { createSelector } from "@ngrx/store";
import { TodoAppState } from "../todo.reducer";


const selectTodoState = (state: TodoAppState) => state;

export const selectTodos = createSelector(selectTodoState, (state) => (state.todoState.todos))


export const TodoSelectors = {
    selectTodos: selectTodos
}