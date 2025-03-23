import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {
  faArrowUp= faArrowUp
}
