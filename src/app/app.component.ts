import {Component} from '@angular/core';
import { ListComponent } from './list/list.component';
import {FormComponent} from './form/form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'default';
}
