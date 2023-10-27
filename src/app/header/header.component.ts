import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkActiveRoute(event.url);
      }
    });
  }

  activeRoute: string = '';

  checkActiveRoute(url: string) {
    const routes = ['home', 'cakes', 'sweets', 'about', 'contact'];
    for (const route of routes) {
      if (url.includes('/' + route)) {
        this.activeRoute = route;
        return;
      }
    }
    this.activeRoute = '';
  }
  
}
