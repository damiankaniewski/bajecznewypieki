import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{


ngOnInit() {
  const imageElement = document.querySelector('.main-photo') as HTMLElement;
  const contactInformation = document.querySelector('.contact-overlay') as HTMLElement;
  if (imageElement) {
    
    setTimeout(() => {
      imageElement.style.opacity = '1';
      imageElement.style.filter = 'brightness(0.5)';
    }, 100);
  }
  if (contactInformation) {
    
    setTimeout(() => {
      contactInformation.style.opacity = '1';
    }, 100);
  }
}

}
