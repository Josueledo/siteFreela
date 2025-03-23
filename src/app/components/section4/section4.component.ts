import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss'
})
export class Section4Component {
  faEnvelope=faEnvelope
  faCheck =faCheck
}
