import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
  InjectionToken,
} from '@angular/core';

import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import {
  DaffExternalRouterDriverInMemoryConfig,
  provideDaffExternalRouterDriverInMemoryConfig,
} from './config';
import { DaffExternalRouterInMemoryDriver } from './in-memory.service';

/**
 * The `DaffExternalRouterDriverInMemoryModule` is an importable NgModule that can
 * be used to configure the {@link DaffExternalRouterInMemoryDriver}.
 *
 * @deprecated See {@link provideDaffExternalRouterInMemoryDriver } Deprecated in version 0.79.0. Will be removed in version 0.82.0.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DaffExternalRouterDriverInMemoryModule {
  static forRoot(
    config: DaffExternalRouterDriverInMemoryConfig | InjectionToken<DaffExternalRouterDriverInMemoryConfig>,
  ): ModuleWithProviders<DaffExternalRouterDriverInMemoryModule> {
    return {
      ngModule: DaffExternalRouterDriverInMemoryModule,
      providers: [
        provideDaffExternalRouterDriver(DaffExternalRouterInMemoryDriver),
        provideDaffExternalRouterDriverInMemoryConfig(config),
      ],
    };
  }
}
