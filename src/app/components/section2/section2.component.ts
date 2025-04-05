import { Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin()

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss',
})
export class Section2Component {
  faArrowUp = faArrowUp;
  @ViewChild('box', { static: false }) box!: ElementRef;

  constructor() {
    gsap.registerPlugin()

  }




}
