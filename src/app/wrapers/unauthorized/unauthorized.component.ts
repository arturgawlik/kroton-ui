import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, routeAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  animations:[
    routeAnimation
  ]
})
export class UnauthorizedComponent {

  prepareRoute(outlet: RouterOutlet) {
    // needs to return 'key' that's changing with route to fire animation
    return outlet.activatedRoute.component;
  }

}
