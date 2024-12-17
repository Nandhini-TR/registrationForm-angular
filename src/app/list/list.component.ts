import {Component} from '@angular/core';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [FormComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  studentsData:any = [  
    {
      firstname : 'Nandhini',
      lastname:'Aravinth',
      username:'Nan',
      email:'abc@gmail.com',
      tel_num:'986543210',
      password:'',
      confirm_password:'',
      id: 1
    }
  ];

  updateData:any = {}

  update(student:any){
    this.updateData = student
    console.log(this.updateData)
  }

  save(event:any) {
    this.studentsData.push(event)
    console.log(event);
    console.log(this.studentsData)
  }
}
