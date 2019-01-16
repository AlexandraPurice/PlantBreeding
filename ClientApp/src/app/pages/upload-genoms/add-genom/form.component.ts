import { Component} from '@angular/core';
import { GenomService } from '../../../services/genom.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  file: HTMLInputElement;
  constructor(private _genomService:GenomService) { }

  updateFile(file) {
    this.file = file;
  }

  submit(file){
      console.log(file);
      this._genomService.sendFile(file);
  }

}
