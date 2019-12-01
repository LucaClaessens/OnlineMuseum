import { trigger, state, style, transition, animate } from '@angular/animations';

export const sideSlide = trigger('sideSlide', [
    state('hidden', style({
        opacity: 0.5,
        transform: 'translateX(-100vw)'
    })),
    state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition('hidden => visible', [
        animate('1s')
    ]),
    transition('visible => hidden', [
        animate('0.5s')
    ]),
]);