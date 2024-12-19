import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false
})
export class ListComponent {
  studentsData:any = [];

  constructor(private route:ActivatedRoute, private router: Router){
    this.loadDataFromLocalStorage();
  }

  loadDataFromLocalStorage(){
    const data = JSON.parse(localStorage.getItem('studentsData') || '[]');
    this.studentsData = data;
  }

  delete(studentId:any){
    this.studentsData = this.studentsData.filter((student: any) => student.id !== studentId);
    localStorage.setItem('studentsData', JSON.stringify(this.studentsData));

  }

  update(student:any){
    this.router.navigate(['/create',{data:JSON.stringify(student)}])

  }

}
