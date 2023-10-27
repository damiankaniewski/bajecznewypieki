import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    // You can access the DOM element and update its styles here
    const imageElement = document.querySelector('.main-photo') as HTMLElement;
    const centeredContainerElement = document.querySelector('.centered-container') as HTMLElement;
    if (imageElement) {
      
      setTimeout(() => {
        imageElement.style.opacity = '1';
        imageElement.style.filter = 'blur(10px) brightness(0.5)';
      }, 100);
      setTimeout(() => {
        centeredContainerElement.style.opacity = '1';
      }, 1000);
    }
  }
}
