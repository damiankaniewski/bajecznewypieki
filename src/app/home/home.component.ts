import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  }

  public currentImages: Record<string, number> = {
    first: 1,
    second: 1,
    third: 1,
    forth: 1
  };

  public getImagePath(folder: string): string {
    return `assets/images/home/cakes/${folder}/image${this.currentImages[folder]}.jpg`;
  }

  public changeImage(folder: string): void {
    const image = document.querySelector(`#${folder} img`);
    if(image){
      image.classList.add("fade-invisible");
    }
    setTimeout(() => {
      this.currentImages[folder] = (this.currentImages[folder] % 4) + 1;
      setTimeout(() => {
        if(image){
          image.classList.remove("fade-invisible");
        }
      },50)
    }, 150)
    
  }
}
