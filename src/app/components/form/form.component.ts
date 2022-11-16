import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
    @Output()
    public todo: EventEmitter<any> = new EventEmitter<any>();

    public todoForm!: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.todoForm = new FormGroup({
            title: new FormControl("", [Validators.required]),
            description: new FormControl("", [Validators.required]),
        });
    }

    onSubmit() {
        if (this.todoForm.valid) {
            this.todo.emit(this.todoForm.value);
            this.todoForm.reset();
        }
    }
}
