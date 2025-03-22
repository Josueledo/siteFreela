import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faQuoteLeft,faStar } from '@fortawesome/free-solid-svg-icons';
import { Section2Component } from './section2/section2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,Section2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faCoffee = faCoffee
  faQuoteLeft=faQuoteLeft
  faStar = faStar
}
