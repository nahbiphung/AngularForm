import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { User } from "src/app/user.models";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormComponent implements OnInit {
  public userForm: FormGroup;

  get name(): FormControl {
    return this.userForm.get("name") as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initUserForm();
  }

  onSubmit(): void {
    if (!this.userForm.valid) {
      return;
    }

    console.log("user: ", this.userForm.value);
  }

  private initUserForm(): void {
    this.userForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(10)]],
      age: [0, [Validators.required, Validators.max(10)]],
    });
  }
}
