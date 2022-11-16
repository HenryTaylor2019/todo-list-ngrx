import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";

@Injectable({
    providedIn: "root",
})
export class TodoApiService {
    constructor(private http: HttpClient) {}

    public getTodosFromStorage() {
        const url = "http://localhost:3000/todos/";
        return this.http.get<Todo[]>(url);
    }

    public addTodoToStorage(todo: Todo) {
        const url = "http://localhost:3000/todos/";
        return this.http.post<Todo>(url, todo);
    }

    public removeTodoFromStorage(id: string) {
        const url = `http://localhost:3000/todos/${id}`;
        return this.http.delete<Todo>(url);
    }
}
