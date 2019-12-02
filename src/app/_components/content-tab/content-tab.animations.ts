import { trigger, state, style, transition, animate } from '@angular/animations';

export const focusAnimation = trigger('focusAnimation', [
    state('hidden', style({
        transform: 'translateY(0)',
        'padding-bottom': '55px'
    })),
    state('visible', style({
        transform: 'translateY(calc(-100% + 100px))',
        'padding-bottom': '115px'
    })),
    transition('hidden => visible', [
        animate('0.1s')
    ]),
    transition('visible => hidden', [
        animate('0.1s')
    ]),
]);
