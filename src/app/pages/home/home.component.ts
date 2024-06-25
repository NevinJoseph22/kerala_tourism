import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { HomeCarouselComponent } from "../../home-carousel/home-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CardComponent, CarouselComponent, HomeCarouselComponent],
})
export class HomeComponent implements OnInit {
  carouselItems = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoWmAl5YG_tgPKfjQ-1_NqLmKVnF42vLOgA&s',
      name: 'Backwaters',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYYq-cmuYWUbDEIdtLVQzqf5fQ3Yq7t5KbA&s',
      name: 'Theyyam',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOSPMaMQshjjSXNNJkcaOdAjrB3ZTC4mwXw&s',
      name: 'Kathakali',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/05/84/31/57/360_F_584315730_hlgzu4Lzr8OtQgU0QerDDSroKtFqbRCf.jpg',
      name: 'Houseboat',
    },
    {
      image:
        'https://qph.cf2.quoracdn.net/main-qimg-980d49c444f55fa23a8db0fdf887fcfd-pjlq',
      name: 'Thrissur Pooram',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbsu0NvlkWCoFLo9b_FVuV8q_MLFPN4ikfQ&s',
      name: 'Munnar',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNEhUZ54So5wbVCbeoPS4sDCAoa_wnzqR5Q&s',
      name: 'Kerala Beaches',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZa6nMitFwTXvzD_KJUFHT7igu6iotF51ogA&s',
      name: 'Tea Plantations',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_93CRdw_8yj9wTh0qQfKpI60imddfCrRxxw&s',
      name: 'Chinese Fishing Nets',
    },
    {
      image:
        'https://www.tripsavvy.com/thmb/L5MXBAbFbwH0QnBlq47ILG6jyUY=/3008x2000/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-141296615-aafce3a8534c45aba8afd312fa155cea.jpg',
      name: 'Waterfalls',
    },
  ];

  ngOnInit() {
    console.log('HomeComponent initialized');
  }
}
