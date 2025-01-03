import { MagentoProductRoute } from '@daffodil/external-router/driver/magento';

import { transformMagentoBaseProduct } from './base';
import { transformMagentoBundleProduct } from './bundle';
import { transformMagentoConfigurableProduct } from './configurable';
import { transformMagentoSimpleProduct } from './simple';

/**
 * Computes supplementary SEO schema for Magento product routes.
 */
export const transformMagentoProductSchema = (resolution: MagentoProductRoute): Record<string, unknown> => {
  switch(resolution.__typename) {
    case 'BundleProduct':
      return transformMagentoBundleProduct(resolution);
    case 'ConfigurableProduct':
      return transformMagentoConfigurableProduct(resolution);
    case 'SimpleProduct':
      return transformMagentoSimpleProduct(resolution);
    default:
      return transformMagentoBaseProduct(resolution);
  }
};
