import { animate, keyframes, query, style, transition, trigger } from '@angular/animations';

export const routeAnimation = trigger('route', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute', 
        left: 0,
        width: '100%',
        opacity: 0,
      }),
    ]),
    query(':enter', [
      style({height: 0}),
      animate('300ms', style({ opacity: 1 }))
    ])
  ])
]);

export const fader =
  trigger('route', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ], { optional: true }),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ], { optional: true })
    ]),
  ]);

