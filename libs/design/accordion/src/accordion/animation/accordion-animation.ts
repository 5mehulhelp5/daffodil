import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const daffAccordionAnimations: {
  readonly openAccordion: AnimationTriggerMetadata;
} = {
  openAccordion: trigger('openAccordion', [
    state('open', style({
      opacity: '1',
      height: '*',
    })),
    state('void',style({
      opacity: '0',
      height: '0',
    })),
    transition('void <=> open',
      animate('150ms ease-in'),
    ),
  ]),
};
