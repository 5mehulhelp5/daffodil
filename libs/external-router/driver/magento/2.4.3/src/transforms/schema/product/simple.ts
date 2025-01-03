
import { MagentoProductRoute } from '@daffodil/external-router/driver/magento';

import { transformMagentoBaseProduct } from './base';

export const transformMagentoSimpleProduct = (resolution: MagentoProductRoute): Record<string, unknown> => ({
  ...transformMagentoBaseProduct(resolution),
  offers: {
    '@type': 'Offer',
    url: resolution.canonical_url,
    ...(resolution.stock_status && {
      availability: resolution.stock_status === 'IN_STOCK' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    }),
    priceSpecification: [
      {
        '@type': 'UnitPriceSpecification',
        price: resolution.price_range.maximum_price.final_price.value,
        priceCurrency: resolution.price_range.maximum_price.final_price.currency,
      },
      {
        '@type': 'UnitPriceSpecification',
        priceType: 'https://schema.org/ListPrice',
        price: resolution.price_range.maximum_price.regular_price.value,
        priceCurrency: resolution.price_range.maximum_price.regular_price.currency,
      },
    ],
  },
});
