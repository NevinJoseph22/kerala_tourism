import { Component } from '@angular/core';
import { RouterOutlet,Router} from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { NgFor, NgIf } from '@angular/common';
import { DestinationComponent } from "./pages/destination/destination.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, AuthComponent, DestinationComponent, CarouselModule,HomeCarouselComponent,NgFor]
})

export class AppComponent {
  title = 'kerala tourism';
  name="Nevin";
  constructor(private router: Router) {}
  isAuthPage(): boolean {
    // console.log("nav")
    return this.router.url === '/auth';
  }

}

