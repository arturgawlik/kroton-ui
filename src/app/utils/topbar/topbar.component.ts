import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  mqAlias$: Observable<string>;

  constructor(public mediaObserver: MediaObserver) {
    this.mqAlias$ = this.mediaObserver.media$.pipe(
      map(c => c.mqAlias)
    );
  }

}
