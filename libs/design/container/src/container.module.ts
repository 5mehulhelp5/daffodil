import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffContainerComponent } from './container/container.component';

/**
 * @deprecated in favor of {@link DAFF_CONTAINER_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffContainerComponent,
  ],
  exports: [
    DaffContainerComponent,
  ],
})
export class DaffContainerModule { }
