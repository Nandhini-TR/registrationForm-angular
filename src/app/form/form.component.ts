import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  @Output() itemSave = new EventEmitter<any>();

  @Input() form:any;

  submit(){
    this.itemSave.emit(this.form);
  }
}
