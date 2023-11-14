import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  showAnswer: boolean[] = [];

  toggleAnswer(answer: number){
    this.showAnswer[answer] = !this.showAnswer[answer];
  }
  
}
