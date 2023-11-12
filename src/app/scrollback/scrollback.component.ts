import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrollback',
  templateUrl: './scrollback.component.html',
  styleUrls: ['./scrollback.component.css']
})
export class ScrollbackComponent {

  isShow?: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
