import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

export const navBarAnimation = trigger('navBarAnimation', [
    transition(':enter', [
        query('li', [
            style({ opacity: 0, transform: 'translateX(250px)' }),
            stagger(-50, [animate('.2s', style({ opacity: 1, transform: 'translateX(0px)' }))])
        ])
    ]),
    transition(':leave', [
        query('li', [
            stagger(-50, [
                style({ opacity: 1, transform: 'translateX(0px)' }),
                animate('.2s', style({ opacity: 0, transform: 'translateX(250px)' }))
            ])
        ])
    ])
]);
