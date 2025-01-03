import { transformMagentoBaseProduct } from './base';
import { createMagentoProductRoute } from '../../../../testing/create-product-route';

describe('@daffodil/external-router | transformMagentoBaseProduct', () => {
  it('should not contain an aggregateRating key if review_count is 0', () => {
    const route = createMagentoProductRoute({ review_count: 0 });
    expect('aggregateRating' in transformMagentoBaseProduct(route)).toEqual(false);
  });

  it('should contain an aggregateRating key if review_count is non-zero', () => {
    const route = createMagentoProductRoute({ review_count: 10 });
    expect('aggregateRating' in transformMagentoBaseProduct(route)).toEqual(true);
  });

  it('should not contain a description key if meta_description is falsy', () => {
    const route = createMagentoProductRoute({ meta_description: '' });
    expect('description' in transformMagentoBaseProduct(route)).toEqual(false);
  });

  it('should contain a description key if meta_description is truthy', () => {
    const route = createMagentoProductRoute({ meta_description: 'Test' });
    expect('description' in transformMagentoBaseProduct(route)).toEqual(true);
  });
});
