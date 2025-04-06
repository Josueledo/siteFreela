import { FooterComponent } from './../footer/footer.component';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { Section3Component } from '../section3/section3.component';
import { Section4Component } from '../section4/section4.component';
import { Section5Component } from '../section5/section5.component';
import { Section2Component } from '../section2/section2.component';
import { Section6Component } from '../section6/section6.component';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';
import { platformBrowser } from '@angular/platform-browser';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, Section2Component, Section3Component, Section4Component, Section5Component, FooterComponent, Section6Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('item1', { static: false }) item1!: ElementRef;
  @ViewChild('item2', { static: false }) item2!: ElementRef;
  @ViewChild('name', { static: false }) name!: ElementRef;
  faCoffee = faCoffee
  faQuoteLeft = faQuoteLeft
  faStar = faStar

  constructor(@Inject(PLATFORM_ID) private plataformId: Object) {
    gsap.registerPlugin(ScrollTrigger)

  }

 

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger)

    if (isPlatformBrowser(this.plataformId)) {
      gsap.from('.content_right', {
        duration: 2,
        x: '100%',
        opacity: 0,
        ease: 'power2.out'
      })
      gsap.from('.content_left', {
        duration: 2,
        x: '-100%',
        opacity: 0,
        ease: 'power2.out'
      })

      gsap.from('.button_container', {
        opacity: 0,
        y: '100%',
        duration: 2,
        ease: 'power2.out'
      });
    }
  }


}
