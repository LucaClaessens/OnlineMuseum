import { trigger, state, style, transition, animate, query } from '@angular/animations';

export const fadeValueChange = trigger('fadeValueChange', [
    state('void', style({ opacity: '0', position: 'fixed' })),
    state('*', style({ opacity: '1', position: 'fixed' })),
    transition('void => *', [animate('2s cubic-bezier(0.075, 0.82, 0.165, 1)')]),
    transition('* => void', [animate('2s cubic-bezier(0.075, 0.82, 0.165, 1)')])
]);

export const detailAnimation = trigger('detailAnimation', [
    transition(':enter', [
        query('.paper', [
            style({ opacity: 0, transform: 'translateX(500px)' }),
            animate('.2s', style({ opacity: 1, transform: 'translateX(0px)' }))
        ])
    ]),
    transition(':leave', [
        query('.paper', [
            style({ opacity: 1, transform: 'translateX(0px)' }),
            animate('.2s', style({ opacity: 0, transform: 'translateX(500px)' }))
        ])
    ])
]);

