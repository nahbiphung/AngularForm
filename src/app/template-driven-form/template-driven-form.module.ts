import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [
    CommonModule,
    TemplateDrivenFormRoutingModule
  ]
})
export class TemplateDrivenFormModule { }
