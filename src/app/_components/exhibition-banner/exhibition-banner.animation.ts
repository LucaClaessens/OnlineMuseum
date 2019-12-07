import { trigger, state, style, transition, animate, query } from '@angular/animations';

// export const fadeValueChange = trigger('fadeValueChange', [
//     transition('void => *', [
//         style({ opacity: 0, position: 'absolute', 'transform-origin': 'top center' }),
//         animate('1.6s',
//             style({ opacity: 0 })
//         ),
//         style({ opacity: 0, transform: 'rotateX(-90deg)', position: 'relative' }),
//         animate('.3s cubic-bezier(0.215, 0.610, 0.355, 1)',
//             style({ opacity: '1', transform: 'rotateX(0deg)' })
//         )
//     ]
//     ),
//     transition('* => void', [
//         style({ opacity: 1, 'transform-origin': 'top center' }),
//         animate('.3s',
//             style({ opacity: 0, transform: 'rotateX(90deg)' }),
//         )
//     ])
// ]);

export const fadeValueChange = trigger('fadeValueChange', [
    transition('void => *', [
        style({ opacity: 0, position: 'absolute', 'transform-origin': 'center center' }),
        animate('1.8s',
            style({ opacity: 0 })
        ),
        style({ opacity: 0, transform: 'translateY(-100%) rotateX(-90deg)', position: 'relative' }),
        animate('.8s cubic-bezier(0.215, 0.610, 0.355, 1)',
            style({ opacity: '1', transform: 'translateY(0) rotateX(0deg)' })
        )
    ]
    ),
    transition('* => void', [
        style({ opacity: 1, 'transform-origin': 'center center' }),
        animate('.8s cubic-bezier(0.645, 0, 0.785, 0.39)',
            style({ opacity: 0, transform: 'translateY(100%) rotateX(90deg)' }),
        )
    ])
]);

