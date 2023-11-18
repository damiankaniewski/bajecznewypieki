import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
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
    this.startImageSlideshow();
  }

  startImageSlideshow() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % 4;
    }, 5000);
  }
}
