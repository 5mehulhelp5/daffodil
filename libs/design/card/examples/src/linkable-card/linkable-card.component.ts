import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  DAFF_CARD_COMPONENTS,
  DAFF_RAISED_CARD_COMPONENTS,
  DAFF_STROKED_CARD_COMPONENTS,
} from '@daffodil/design/card';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'linkable-card',
  templateUrl: './linkable-card.component.html',
  styleUrls: ['./linkable-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CARD_COMPONENTS,
    DAFF_RAISED_CARD_COMPONENTS,
    DAFF_STROKED_CARD_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class LinkableCardComponent {
  basicColorControl: UntypedFormControl = new UntypedFormControl('');
  raisedColorControl: UntypedFormControl = new UntypedFormControl('');
  strokedColorControl: UntypedFormControl = new UntypedFormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'tertiary', label: 'Tertiary' },
    { value: 'theme', label: 'Theme' },
    { value: 'theme-contrast', label: 'Theme Contrast' },
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
  ];
}
