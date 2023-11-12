import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePaths = {
    'first': [
      'assets/images/home/cakes/first/image1.jpg',
      'assets/images/home/cakes/first/image2.jpg',
      'assets/images/home/cakes/first/image3.jpg',
      'assets/images/home/cakes/first/image4.jpg'
    ],
    'second': [
      'assets/images/home/cakes/second/image1.jpg',
      'assets/images/home/cakes/second/image2.jpg',
      'assets/images/home/cakes/second/image3.jpg',
      'assets/images/home/cakes/second/image4.jpg'
    ],
    'third': [
      'assets/images/home/cakes/third/image1.jpg',
      'assets/images/home/cakes/third/image2.jpg',
      'assets/images/home/cakes/third/image3.jpg',
      'assets/images/home/cakes/third/image4.jpg'
    ],
    'forth': [
      'assets/images/home/cakes/forth/image1.jpg',
      'assets/images/home/cakes/forth/image2.jpg',
      'assets/images/home/cakes/forth/image3.jpg',
      'assets/images/home/cakes/forth/image4.jpg'
    ]
  };

  currentImageIndex: number = 0;

  ngOnInit() {
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

    this.startImageSlideshow();
  }

  startImageSlideshow() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % 4;
    }, 5000);
  }
}
