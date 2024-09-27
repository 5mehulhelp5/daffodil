import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  DaffCheckboxSetComponent,
  DaffCheckboxModule,
} from '@daffodil/design';
import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'checkbox-set',
  templateUrl: './checkbox-set.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffCheckboxModule,
    ReactiveFormsModule,
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class CheckboxSetComponent implements OnInit {

  @ViewChild(DaffCheckboxSetComponent)
  private checkboxSet: DaffCheckboxSetComponent;
  checkboxArray = new UntypedFormArray([new UntypedFormControl(), new UntypedFormControl(), new UntypedFormControl()]);
  selectedValues = [];

  ngOnInit() {
    this.checkboxArray.setValue([false, false, false]);
  }
  displayList() {
    this.selectedValues = this.checkboxSet.getValues();
  }
}
