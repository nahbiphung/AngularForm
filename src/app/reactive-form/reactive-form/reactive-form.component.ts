import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
