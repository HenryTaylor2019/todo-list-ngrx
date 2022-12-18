import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { List } from "../models/list";
import { Todo } from "../models/todo";

@Injectable({
    providedIn: "root",
})
export class TodoApiService {
    constructor(private http: HttpClient) {}

    public getTodosFromStorage() {
        const url = 'http://localhost:3000/todos/';
        return this.http.get<Todo[]>(url);
    }

    public addTodoToStorage(todo: Todo) {
        const url = 'http://localhost:3000/todos/';
        return this.http.post<Todo>(url, todo);
    }

    public addAllTodosToStorage(todos: Todo[]) {
        const url = 'http://localhost:3000/todos/';
        return this.http.post<Todo[]>(url, todos);
    }

    public removeTodoFromStorage(id: string) {
        const url = `http://localhost:3000/todos/${id}`;
        return this.http.delete<Todo>(url);
    }

    public removeAllTodosFromStorage(id: string) {
        const url = `http://localhost:3000/todos/${id}`;
        return this.http.delete<Todo>(url);
    }

    // Lists

    public getListsFromStorage() {
        const url = 'http://localhost:3000/lists/';
        return this.http.get<List[]>(url);
    }

    public addListToStorage(list: List) {
        const url = 'http://localhost:3000/lists/';
        return this.http.post<List>(url, list);
    }

    public addAllListsToStorage(lists: List[]) {
        const url = 'http://localhost:3000/lists/';
        return this.http.post<List[]>(url, lists);
    }

    public removeListFromStorage(id: string) {
        const url = `http://localhost:3000/lists/${id}`;
        return this.http.delete<List>(url);
    }

    public removeAllListsFromStorage() {
        const url = `http://localhost:3000/lists/`;
        return this.http.delete<List>(url);
    }


    // Archive

    public getTodosFromArchiveStorage() {
        const url = 'http://localhost:3000/archivedtodos/';
        return this.http.get<Todo[]>(url);
    }

    public addTodoToArchiveStorage(todo: Todo) {
        const url = 'http://localhost:3000/archivedtodos/';
        return this.http.post<Todo>(url, todo);
    }

    public addTodosToArchiveStorage(todos: Todo[]) {
        const url = 'http://localhost:3000/archivedtodos/';
        return this.http.post<Todo[]>(url, todos);
    }

    public removeTodoFromArchiveStorage(id: string) {
        const url = `http://localhost:3000/archivedtodos/${id}`;
        return this.http.delete<Todo>(url);
    }
}
