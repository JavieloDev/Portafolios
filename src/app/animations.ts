import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const fadeAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      group([
        query(':leave', [
          animate('100ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('100ms ease-out', style({ opacity: 1 }))
        ])
      ])
    ])
  ]);
