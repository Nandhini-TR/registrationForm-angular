import {Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form:any;

  init(){
    this.form = {
      firstname : '',
      lastname:'',
      username:'',
      email:'',
      tel_num:'',
      password:'',
      confirm_password:'',
      id: uuidv4()
    };
  }

  constructor(){
    this.init()
  }

  @Output() itemSave = new EventEmitter<any>();

  submit(){
    this.itemSave.emit(this.form);
    this.init()
  }
}
