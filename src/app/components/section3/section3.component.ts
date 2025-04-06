import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component {
 @ViewChild('box', { static: false }) box!: ElementRef;
 @ViewChild('box2', { static: false }) box2!: ElementRef;
 @ViewChild('box3', { static: false }) box3!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private plataformId: Object) {
    gsap.registerPlugin(ScrollTrigger)

  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger)
    console.log(this.box.nativeElement)
    this.animation(this.box.nativeElement)
    this.animation(this.box2.nativeElement)
    this.animation(this.box3.nativeElement)

  }

  animation(obj:any){
    const el = obj;
    if(isPlatformBrowser(this.plataformId)){
    gsap.to(obj,{
      duration:3,
      scrollTrigger:{
        trigger:el,
        start:"top 80%",
        end:"top 0px",
        scrub:true,
        toggleClass:"active"
      }
    })
  }
  }

}
