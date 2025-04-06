import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss',
})
export class Section2Component {
  faArrowUp = faArrowUp;

  constructor(@Inject(PLATFORM_ID) private plataformId: Object) {
    gsap.registerPlugin(ScrollTrigger)

  }
  ngAfterViewInit(){
    gsap.registerPlugin(ScrollTrigger)

    this.animation('.card1')
    this.animation('.card2')
    this.animation('.card3')
  }


  animation(obj:any){
    gsap.registerPlugin(ScrollTrigger)

    if(isPlatformBrowser(this.plataformId)){
    gsap.from(obj,{
      duration:2,
      scale:0,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger:{
        trigger:obj,
        start:"top 70%",
        end:"top 0px",
      }
    })
  }
  }

}
