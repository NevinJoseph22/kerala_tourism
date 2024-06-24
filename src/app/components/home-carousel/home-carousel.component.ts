import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent implements OnInit {
carouselItems = [
    {
      image: {
        mobile: 'https://www.keralatourism.org/images/banner/mobile/ashtamudi_lake_-768-768.jpg',
        tablet: 'https://www.keralatourism.org/images/banner/tablet/ashtamudi_lake_-1024-768.jpg',
        mediumDesktop: 'https://www.keralatourism.org/images/banner/medium_desktop/ashtamudi_lake.jpg',
        desktop: 'https://www.keralatourism.org/images/banner/desktop/ashtamudi_lake.jpg'
      },
      alt: 'Ashtamudi Lake'
    },
    {
      image: {
        mobile: 'https://www.keralatourism.org/images/banner/mobile/caravan-768x7682.jpg',
        tablet: 'https://www.keralatourism.org/images/banner/tablet/caravan-1024x7682.jpg',
        mediumDesktop: 'https://www.keralatourism.org/images/banner/medium_desktop/caravan-1920x6502.jpg',
        desktop: 'https://www.keralatourism.org/images/banner/desktop/caravan-1920x6502.jpg'
      },
      alt: 'Keravan Kerala'
    },
    {
      image: {
        mobile: 'https://www.keralatourism.org/images/banner/mobile/destination-wedding-banner-768.jpg',
        tablet: 'https://www.keralatourism.org/images/banner/tablet/destination-wedding-banner-1024.jpg',
        mediumDesktop: 'https://www.keralatourism.org/images/banner/medium_desktop/destination-wedding-banner-1920.jpg',
        desktop: 'https://www.keralatourism.org/images/banner/desktop/destination-wedding-banner-1920.jpg'
      },
      alt: 'Destination Wedding'
    },
    {
      image: {
        mobile: 'https://www.keralatourism.org/images/banner/mobile/heli-768.jpg',
        tablet: 'https://www.keralatourism.org/images/banner/tablet/heli-1024.jpg',
        mediumDesktop: 'https://www.keralatourism.org/images/banner/medium_desktop/heli-1920.jpg',
        desktop: 'https://www.keralatourism.org/images/banner/desktop/heli-1920.jpg'
      },
      alt: 'Heli Tourism'
    },
    {
      image: {
        mobile: 'https://www.keralatourism.org/images/banner/mobile/escape2-to-the-hills-768x768_(1).jpg',
        tablet: 'https://www.keralatourism.org/images/banner/tablet/escape-to-the-hills-1024x768_(1).jpg',
        mediumDesktop: 'https://www.keralatourism.org/images/banner/medium_desktop/escape-to-the-hills-1920x650_(2).jpg',
        desktop: 'https://www.keralatourism.org/images/banner/desktop/escape-to-the-hills-1920x650_(2).jpg'
      },
      alt: 'Munnar'
    },
    {
      image: {
        mobile: 'https://www.keralatourism.org/images/banner/mobile/tvm1-768x768_(1).jpg',
        tablet: 'https://www.keralatourism.org/images/banner/tablet/tvm1-1024x768_(1).jpg',
        mediumDesktop: 'https://www.keralatourism.org/images/banner/medium_desktop/tvm1-1920x650_(1).jpg',
        desktop: 'https://www.keralatourism.org/images/banner/desktop/tvm1-1920x650_(1).jpg'
      },
      alt: 'Lands of Majestic Treats'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
