import { animate, animation, keyframes, style } from '@angular/animations';

export const shakeItAnimation = animation([
    animate('0.3s', keyframes([
        style({ transform: 'translate3d(-0.5px, 0, 0)', offset: 0.1 }),
        style({ transform: 'translate3d(2px, 0, 0)', offset: 0.2 }),
        style({ transform: 'translate3d(-3px, 0, 0)', offset: 0.3 }),
        style({ transform: 'translate3d(3px, 0, 0)', offset: 0.4 }),
        style({ transform: 'translate3d(-3px, 0, 0)', offset: 0.5 }),
        style({ transform: 'translate3d(3px, 0, 0)', offset: 0.6 }),
        style({ transform: 'translate3d(-3px, 0, 0)', offset: 0.7 }),
        style({ transform: 'translate3d(2px, 0, 0)', offset: 0.8 }),
        style({ transform: 'translate3d(-0.5px, 0, 0)', offset: 0.9 }),
    ]))
]);
