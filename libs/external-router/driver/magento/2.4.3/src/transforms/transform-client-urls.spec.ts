import { transformClientUrls } from './transform-client-urls';
import { createMagentoCategoryRoute } from '../../testing/create-category';
import { createMagentoProductRoute } from '../../testing/create-product-route';

describe('@daffodil/external-router | transformClientUrls', () => {
  it('transform the canonical url of a product to be the full path to the item', () => {
    const route = createMagentoProductRoute({ canonical_url: 'test.html' });
    const revisedRoute = transformClientUrls(route, 'https://test.com');
    expect(revisedRoute.canonical_url).toEqual('https://test.com/test.html');
  });

  it('transform the canonical url of a category to be the full path to the item', () => {
    const route = createMagentoCategoryRoute({ canonical_url: 'test.html' });
    const revisedRoute = transformClientUrls(route, 'https://test.com');
    expect(revisedRoute.canonical_url).toEqual('https://test.com/test.html');
  });

  it('transform the canonical url of a category\'s products to be the full path to the item', () => {
    const route = createMagentoCategoryRoute({ products: { items: [ {
      canonical_url: 'test.html',
      relative_url: 'test.html',
      type: 'PRODUCT',
      redirect_code: 0,
      uid: '',
      name: '',
      meta_title: '',
      sku: '',
      review_count: 0,
      rating_summary: 0,
      image: {
        url: '',
      },
      price_range: {
        maximum_price: {
          final_price: {
            currency: '',
            value: 0,
          },
          regular_price: {
            currency: '',
            value: 0,
          },
        },
        minimum_price: {
          final_price: {
            currency: '',
            value: 0,
          },
          regular_price: {
            currency: '',
            value: 0,
          },
        },
      },
      __typename: '',
    }]}});
    const revisedRoute = transformClientUrls(route, 'https://test.com');
    expect(revisedRoute.products.items[0].canonical_url).toEqual('https://test.com/test.html');
  });
});
