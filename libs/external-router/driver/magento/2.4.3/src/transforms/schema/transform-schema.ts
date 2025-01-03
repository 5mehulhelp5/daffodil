import { MagentoRoute } from '@daffodil/external-router/driver/magento';

import { transformMagentoCategorySchema } from './category/category';
import { transformMagentoProductSchema } from './product/product';

export const transformSchema = (resolution: MagentoRoute): Record<string, any> | null => {
  switch(resolution.type) {
    case 'PRODUCT':
      return transformMagentoProductSchema(resolution);
    case 'CATEGORY':
      return transformMagentoCategorySchema(resolution);
    default:
      return null;
  }
};
