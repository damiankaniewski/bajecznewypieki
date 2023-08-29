import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'bajeczne-wypieki';

      showScrollToTopButton: boolean = false;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.showScrollToTopButton = window.scrollY > 300;
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
