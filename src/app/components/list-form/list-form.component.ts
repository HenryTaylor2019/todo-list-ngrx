import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-list-form",
  templateUrl: "./list-form.component.html",
  styleUrls: ["./list-form.component.scss"],
})
export class ListFormComponent implements OnInit {
  @Output() public formData = new EventEmitter();
  public listForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.listForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
    });
  }

  onCreateList(): void {
    if (this.listForm.valid) {
      this.formData.emit(this.listForm.value);
      console.log(this.listForm.value);
      this.listForm.reset();
    }
  }
}
