import {Component} from '@angular/core';
import { ListComponent } from './list/list.component';
import {FormComponent} from './form/form.component'

@Component({
  selector: 'app-root',
  imports: [ListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
