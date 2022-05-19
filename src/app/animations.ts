
import { style, trigger, transition, animate, query, animateChild, group } from '@angular/animations';

export const leftRouterAnimations =
trigger('leftRouterAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0, transform: 'translateX(-25vw)'}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                animate('0.5s ease-in', style({opacity: 0, transform: 'translateX(-25vw)'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.5s ease-in', style({opacity: 1, transform: 'translateX(0vw)'})),
            ],
            { optional: true }
            )
    ])
]);
export const centerRouterAnimations =
trigger('centerRouterAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0, transform: 'translateY(-25vh)'}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                animate('0.5s ease-in', style({opacity: 0, transform: 'translateY(-25vh)'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.5s ease-in', style({opacity: 1, transform: 'translateY(0vh)'})),
            ],
            { optional: true }
            )
    ])
]);
export const rightRouterAnimations =
trigger('rightRouterAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0, transform: 'translateX(25vw)'}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                animate('0.5s ease-in', style({opacity: 0, transform: 'translateX(25vw)'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.5s ease-in', style({opacity: 1, transform: 'translateX(0vw)'})),
            ],
            { optional: true }
            )
    ])
]);
