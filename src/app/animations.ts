
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
                animate('0.5s ease-out', style({opacity: 0, transform: 'translateX(-25vw)'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.5s ease-out', style({opacity: 1, transform: 'translateX(0vw)'})),
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
                animate('0.5s ease-out', style({opacity: 0, transform: 'translateY(-25vh)'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.5s ease-out', style({opacity: 1, transform: 'translateY(0vh)'})),
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
                animate('0.5s ease-out', style({opacity: 0, transform: 'translateX(25vw)'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.5s ease-out', style({opacity: 1, transform: 'translateX(0vw)'})),
            ],
            { optional: true }
            )
    ])
]);

export const ngIfProfileAnimations =
trigger(
  'ngIfProfileAnimations',
    [
      transition(
        ':enter', 
        [
          style({ transform: 'scale(0)', opacity: 0 } ),
          animate('0.25s ease-out', 
                  style({ transform: 'scale(1)', opacity: 1 }))
        ]
      ),
      transition(
        ':leave', 
        [
          style({transform: 'scale(1)', opacity: 1}),
          animate('0.25s ease-out', 
                  style({  transform: 'scale(0)', opacity: 0 }))
        ]
      )
    ]
  );

export const ngIfAnimations =
trigger(
  'ngIfAnimations',
    [
      transition(
        ':enter', 
        [
          style({ height: '0px', maxHeight: '0px', minHeight: '0px', opacity: 0 } ),
          animate('0.25s ease-out', 
                  style({ height: '48px', maxHeight: '48px', minHeight: '48px', opacity: 1 }))
        ]
      ),
      transition(
        ':leave', 
        [
          style({ height: '48px', maxHeight: '48px', minHeight: '48px', opacity: 1 }),
          animate('0.25s ease-out', 
                  style({ height: '0px', maxHeight: '0px', minHeight: '0px', opacity: 0 }))
        ]
      )
    ]
  );

  export const ngIfConsoleAnimations =
  trigger(
    'ngIfConsoleAnimations',
      [
        transition(
          ':enter', 
          [
            style({ transform: 'translateY(-160px)'} ),
            animate('0.25s ease-out', 
                    style({ transform: 'translateY(0px)' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ transform: 'translateY(0px)' }),
            animate('0.25s ease-out', 
                    style({ transform: 'translateY(-160px)'}))
          ]
        )
      ]
    );

  export const ngIfBannerAnimations =
  trigger(
    'ngIfBannerAnimations',
      [
        transition(
          ':enter', 
          [
            style({ top: '-160px'} ),
            animate('1s ease-out', 
                    style({ top: '0px' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ top: '0px' }),
            animate('1s ease-out', 
                    style({ top: '-160px' }))
          ]
        )
      ]
    );

    export const popupRouterAnimations =
    trigger('popupRouterAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                animate('0.25s ease-out', style({opacity: 0})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.25s ease-out', style({opacity: 1})),
            ],
            { optional: true }
            )
    ])
  ]);
    
  
