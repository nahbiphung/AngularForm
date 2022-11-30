import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "reactive-form",
    loadChildren: "./reactive-form/reactive-form.module#ReactiveFormModule",
  },
  {
    path: "template-driven-form",
    loadChildren:
      "./template-driven-form/template-driven-form.module#TemplateDrivenFormModule",
  },
  {
    path: "",
    redirectTo: "/template-driven-form",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "/template-driven-form",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
