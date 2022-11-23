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
    
    public severityOptions = [
        {
            value: '1',
            label: 'Low'
        },
        {
            value: '2',
            label: 'Medium'
        },
        {
            value: '3',
            label: 'High'
        },
    ]

    constructor() {}

    ngOnInit(): void {
        this.todoForm = new FormGroup({
            title: new FormControl("", [Validators.required]),
            description: new FormControl("", [Validators.required]),
            option1: new FormControl("",),
            option2: new FormControl("",),
            option3: new FormControl("",),
        });
    }

    onSubmit() {
        console.log(this.todoForm.value)
        if (this.todoForm.valid) {
            this.todo.emit(this.todoForm.value);
            this.todoForm.reset();
        }
    }
}
