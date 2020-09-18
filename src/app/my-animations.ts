import { trigger, animate, style, transition, query, group } from "@angular/animations";



export const fadeIn = [
  trigger('fade', [
    transition('void => *', [
      style({ opacity: 0 }),
      animate(350, style({ opacity: 1 }))
    ])
  ])
]






export const ff = [
  trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
      group([
        query(':enter', [
          style({ opacity: 0 }),
          animate('1000ms ease-in-out', style({ opacity: 1 }))
        ]),
        query(':leave', [
          style({ opacity: 1 }),
          animate('1000ms ease-in-out', style({ opacity: 0 }))]),
      ])
    ])
  ])
]
