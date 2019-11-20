import { trigger, style, transition, animate, query } from '@angular/animations';

export const growAnimation = trigger('growAnimation', [
    transition(':leave', [
        query('.loader', [
            style({ opacity: 1 }),
            animate('300ms ease-in', style({ opacity: 0 }))
        ]),
        query('.circle', [
            style({ transform: 'scale(0)', opacity: 1 }),
            animate('300ms ease-out', style({ transform: 'scale(1)', opacity: 0 }))
        ]),
    ]),
]);

export const loadAnimation = trigger('loadAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
    ]),
    transition('false => true', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
    ])
]);