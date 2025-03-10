import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';
import {
  provideDaffNavigationDriver,
  DaffNavigationTransformer,
} from '@daffodil/navigation/driver';

import {
  MagentoNavigationDriverConfig,
  MAGENTO_NAVIGATION_DRIVER_CONFIG_DEFAULT,
  provideMagentoNavigationDriverConfig,
} from './config/public_api';
import { DaffMagentoNavigationService } from './navigation.service';
import { DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME } from './queries/get-category-tree';
import { DaffMagentoNavigationTransformerService } from './transformers/navigation-transformer';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffNavigationMagentoDriverModule {
  static forRoot(config: MagentoNavigationDriverConfig = MAGENTO_NAVIGATION_DRIVER_CONFIG_DEFAULT): ModuleWithProviders<DaffNavigationMagentoDriverModule> {
    return {
      ngModule: DaffNavigationMagentoDriverModule,
      providers: [
        provideDaffNavigationDriver(DaffMagentoNavigationService),
        {
          provide: DaffNavigationTransformer,
          useExisting: DaffMagentoNavigationTransformerService,
        },
        provideMagentoNavigationDriverConfig(config),
        provideDaffMagentoCacheableOperation(DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME),
      ],
    };
  }
}
