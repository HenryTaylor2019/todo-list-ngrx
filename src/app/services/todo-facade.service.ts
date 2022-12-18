import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { List } from "../models/list";
import { Todo } from "../models/todo";
import { selectArchivedTodos, selectLists, selectLoadingState, selectTodos } from "../store/selectors/todo.selectors";

@Injectable({
    providedIn: "root",
})
export class TodoFacadeService {
    constructor(private store: Store<any>) {}

    getTodos(): Observable<Todo[]> {
        return this.store.select(selectTodos);
    }

    getLists(): Observable<List[]> {
        return this.store.select(selectLists);
    }

    getListsById(todoId: string): Observable<List[]> {
        return this.store.select(selectLists).pipe(
            map((lists) => lists.filter((list: List) => list.id === todoId))
        );
    }

    getArchivedTodos(): Observable<Todo[]> {
        return this.store.select(selectArchivedTodos);
    }

    getLoadingState(): Observable<boolean> {
        return this.store.select(selectLoadingState);
    }

    dispatch(action: Action) {
        this.store.dispatch(action);
    }
}
