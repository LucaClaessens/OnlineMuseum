import { trigger, transition, style, animate } from '@angular/animations';

export const insertRemove = trigger('insertRemove', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50vh)' }),
        animate('.5s ease', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('.5s ease', style({ opacity: 0, transform: 'translateY(50vh)' }))
    ])
]);