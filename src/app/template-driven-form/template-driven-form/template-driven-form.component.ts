import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { User } from "src/app/user.models";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenFormComponent implements OnInit {
  public user: User = new User();

  constructor() {}

  ngOnInit() {
    console.log("user: ", this.user);
  }

  onSubmit(): void {
    console.log("user: ", this.user);
  }
}
