import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, Autoplay} from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Autoplay]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent {

}
