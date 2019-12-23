import { trigger, transition, style, animate } from '@angular/animations';

export const insertRemove = trigger('insertRemove', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s ease', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('.5s ease', style({ opacity: 0 }))
    ])
])