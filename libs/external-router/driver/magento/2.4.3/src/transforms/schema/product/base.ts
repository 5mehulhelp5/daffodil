import { MagentoProductRoute } from '@daffodil/external-router/driver/magento';

import { rescaleRatingOutOf5 } from '../rescale-rating';

export const transformMagentoBaseProduct = (product: MagentoProductRoute): Record<string, unknown> => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  url: product.canonical_url,
  sku: product.sku,
  name: product.meta_title ?? product.name ?? '',
  ...(product.meta_description && {  description: product.meta_description }),
  ...(product.review_count > 0 && { aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: rescaleRatingOutOf5(product.rating_summary, 100),
    reviewCount: product.review_count,
  }}),
  image: product.image?.url,
});
