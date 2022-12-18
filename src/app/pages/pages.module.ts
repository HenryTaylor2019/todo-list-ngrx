import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentsModule } from "../components/components.module";
import { TodoPageComponent } from "./todo-page/todo-page.component";

@NgModule({
    declarations: [TodoPageComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatButtonModule,
        FormsModule,
        MatSlideToggleModule,
        BrowserAnimationsModule
    ],
    exports: [TodoPageComponent],
})
export class PagesModule {}
