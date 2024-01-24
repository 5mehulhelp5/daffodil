import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { DaffioDocsPackagesListContainerModule } from 'apps/daffio/src/app/guides/containers/packages-list/packages-list.module';

import { DaffioDocsSidebarContainer } from './docs-sidebar.component';
import { DaffioDocsSidebarContentComponentModule } from '../../components/docs-sidebar-content/docs-sidebar-content.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,

    DaffioDocsPackagesListContainerModule,
    DaffioDocsSidebarContentComponentModule,
  ],
  declarations: [
    DaffioDocsSidebarContainer,
  ],
  exports: [
    DaffioDocsSidebarContainer,
  ],
})
export class DaffioDocsSidebarContainerModule {}
