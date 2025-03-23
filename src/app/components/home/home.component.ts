import { FooterComponent } from './../footer/footer.component';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faQuoteLeft,faStar } from '@fortawesome/free-solid-svg-icons';
import { Section3Component } from '../section3/section3.component';
import { Section4Component } from '../section4/section4.component';
import { Section5Component } from '../section5/section5.component';
import { Section2Component } from '../section2/section2.component';
import { Section6Component } from '../section6/section6.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,Section2Component,Section3Component,Section4Component,Section5Component,FooterComponent, Section6Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faCoffee = faCoffee
  faQuoteLeft=faQuoteLeft
  faStar = faStar
}
