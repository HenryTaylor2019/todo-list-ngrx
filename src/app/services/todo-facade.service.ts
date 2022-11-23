import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Todo } from "../models/todo";
import { selectArchivedTodos, selectTodos } from "../store/selectors/todo.selectors";

@Injectable({
    providedIn: "root",
})
export class TodoFacadeService {
    constructor(private store: Store<any>) {}

    getTodos(): Observable<Todo[]> {
        return this.store.select(selectTodos);
    }

    getArchivedTodos(): Observable<Todo[]> {
        return this.store.select(selectArchivedTodos);
    }

    dispatch(action: Action) {
        this.store.dispatch(action);
    }
}
