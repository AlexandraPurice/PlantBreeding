import { Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor() { }
 
  updateFile(file: HTMLInputElement) {
    let name = file.value;
  }

}
