import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faBars, faClose, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faCoffee = faCoffee;
  faBars = faBars;
  isVisible = false;
  faClose = faClose
  isActive: boolean = false;
  faLightbulb= faLightbulb
  scrollHandler = () => this.checkScrollPosition();


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.scrollHandler);
    }
  }
  
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
  ngOnInit() {
    
    this.checkScrollPosition();
  }


  menu() {
    let content = document.querySelector('.content') as HTMLLIElement;

    this.isVisible = !this.isVisible;

    this.isActive = !this.isActive;

    if (this.isVisible === false) {
      content.style.right = '-150%';
      content.style.transform = 'skew(20deg)';
    } else if (this.isVisible === true) {
      content.style.right = '0';
      content.style.transform = 'skew(0deg)';
    }

    content.addEventListener('transitionend', () => {
      if (this.isVisible === false) {
        content.style.transform = 'skew(-20deg)'; 
      } else {
        content.style.transform = 'skew(0deg)'; // Novo valor de skew após a animação
      }
    });
  }

  checkScrollPosition() {
    let container = document.querySelector('.container') as HTMLLIElement;


    if (window.scrollY === 0) {
      container.style.borderRadius = "0px"
      
      
    } else{
      container.style.borderBottomLeftRadius = "50px"
      container.style.borderBottomRightRadius = "50px"

    }
  }
}
