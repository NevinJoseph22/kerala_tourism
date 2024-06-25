import { NgFor } from '@angular/common';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items: any[] = [];
  @ViewChild('carouselContent', { static: true }) carouselContent!: ElementRef;

  constructor() {
    console.log('CarouselComponent initialized');
  }

  ngOnInit(): void {
    console.log('CarouselComponent ngOnInit');
  }

  scrollLeft(): void {
    this.carouselContent.nativeElement.scrollBy({
      left: -this.carouselContent.nativeElement.clientWidth / 4,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.carouselContent.nativeElement.scrollBy({
      left: this.carouselContent.nativeElement.clientWidth / 4,
      behavior: 'smooth'
    });
  }
}
