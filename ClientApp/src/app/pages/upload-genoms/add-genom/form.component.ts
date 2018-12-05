import { Component, OnInit } from '@angular/core';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  chooseFile() {
       document.getElementById('choose').click();
  }
  ngOnInit() {

  }

}
