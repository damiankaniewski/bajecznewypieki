import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // w konstruktorze mamy Router i ActivatedRoute, czyli serwisy dostarczające nam informację np. jaki jest aktywny routing, czyli że teraz mamy otwarte cakes albo home
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkActiveRoute(event.url); // aktywujemy poniższą funkcję na samym początku działania komponentu, żeby podświetliła się strona na której jesteśmy na starcie
      }
    });
  }

  // zmienna activeRoute, która będzie nam odpowiadała za zmiane klasy w html
  activeRoute: string = '';

  checkActiveRoute(url: string) {
    const routes = ['home', 'cakes', 'sweets', 'about', 'contact']; // nasze wszystkie "zakładki"
    for (const route of routes) {
      if (url.includes('/' + route)) { // proste sprawdzanie aktywnego adresu, czyli jeśli mamy np bajecznewypieki.com/cakes, to nasza zmienna route będzie miała wartość "cakes" (pod warunkiem, że ten adres jest zdefiniowany w naszych "zakładkach")
        this.activeRoute = route; // przypisywanie powyższej zmiennej do activeRoute
        return;
      }
    }
    this.activeRoute = ''; // na sam koniec czyszczenie activeRoute
  }
  
}
