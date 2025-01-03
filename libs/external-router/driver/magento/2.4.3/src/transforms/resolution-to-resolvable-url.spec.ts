import { ID } from '@daffodil/core';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION } from '@daffodil/external-router/driver';
import {
  MagentoRoute,
  MagentoUrlRewriteEntityTypeEnum,
} from '@daffodil/external-router/driver/magento';

import { transformResolutionToResolvableUrlv243 } from './resolution-to-resolvable-url';
import { createMagentoCategoryRoute } from '../../testing/create-category';
import { createMagentoProductRoute } from '../../testing/create-product-route';
import { createMagentoRoutable } from '../../testing/create-routable';

describe('@daffodil/external-router/driver/magento | transformResolutionToResolvableUrlv243', () => {
  let id: ID;
  let url: string;
  let route: MagentoRoute;
  let resolvableUrl: DaffExternallyResolvableUrl;

  beforeEach(() => {
    id = 'id';
    url = 'url';
    route = createMagentoProductRoute({
      relative_url: `/${url}?query=param#fragment`,
      uid: id,
    });
    resolvableUrl = {
      id,
      url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      code: 200,
    };
  });

  it('should return a resolvable url with the correct values', () => {
    const result = transformResolutionToResolvableUrlv243(route);
    expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
    expect(result.url).toEqual(url);
    expect(result.id).toEqual(id);
    expect(result.code).toEqual(200);
  });

  const testCases = [
    {
      kind: 'product',
      routeData: createMagentoProductRoute({
        relative_url: `/url?query=param#fragment`,
        name: 'Test Name',
        meta_title: 'Test Title',
        meta_description: 'Test Description',
        canonical_url: 'test-url.html',
        rating_summary: 50,
        review_count: 100,
        uid: id,
        sku: 'test-sku',
        image: {
          url: 'https://example.com/test.jpg',
        },
        stock_status: 'IN_STOCK',
        price_range: {
          maximum_price: {
            final_price: {
              value: 20.99,
              currency: 'USD',
            },
            regular_price: {
              value: 30.99,
              currency: 'USD',
            },
          },
          minimum_price: {
            final_price: {
              value: 20.99,
              currency: 'USD',
            },
            regular_price: {
              value: 30.99,
              currency: 'USD',
            },
          },
        },
      }),
      result: {
        type: 'PRODUCT',
        url: 'url',
        id,
        code: 200,
        data: {
          canonical_url: 'test-url.html',
          meta_description: 'Test Description',
          title: 'Test Title',
          schema: {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: 'Test Title',
            description: 'Test Description',
            sku: 'test-sku',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '2.5',
              reviewCount: 100,
            },
            image: 'https://example.com/test.jpg',
            url: 'test-url.html',
            offers: { '@type': 'Offer',
              url: 'test-url.html',
              availability: 'https://schema.org/InStock',
              priceSpecification: [
                { '@type': 'UnitPriceSpecification', price: 20.99, priceCurrency: 'USD' },
                { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/ListPrice', price: 30.99, priceCurrency: 'USD' },
              ]},
          },
        },
      },
    },
    {
      kind: 'category',
      routeData: createMagentoCategoryRoute({
        relative_url: '/category.html',
        canonical_url: '/category.html',
        name: 'Test Category',
      }),
      result: {
        type: 'CATEGORY',
        url: 'category.html',
        id,
        code: 200,
        data: {
          title: 'Test Category',
          canonical_url: '/category.html',
          meta_description: undefined,
          schema: {
            '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: [  ],
          },
        },
      },
    },
    {
      kind: 'routable',
      routeData: createMagentoRoutable({
        relative_url: 'unknown.html',
      }),
      result: {
        id: null,
        type: null,
        url: null,
        code: 404,
      },
    },
  ];

  testCases.forEach(( { kind, routeData, result }) => {
    it(`should transform a ${kind} route`, () => {
      expect(
        transformResolutionToResolvableUrlv243(routeData),
      ).toEqual(result);
    });
  });


  it('should return name if meta_title is falsy', () => {
    const routeWithSeoData = createMagentoProductRoute({
      relative_url: `/${url}?query=param#fragment`,
      name: 'Test Name',
      meta_title: null,
      meta_description: 'Test Description',
      canonical_url: 'test-url.html',
      uid: id,
      sku: 'test-sku',
    });

    expect(
      transformResolutionToResolvableUrlv243(routeWithSeoData).data.title,
    ).toEqual(routeWithSeoData.name);
  });

  it('should return an empty title if meta_title and name are falsy', () => {
    const routeWithSeoData = createMagentoProductRoute({
      relative_url: `/${url}?query=param#fragment`,
      name: null,
      meta_title: null,
      meta_description: 'Test Description',
      canonical_url: 'test-url.html',
      uid: id,
      sku: 'test-sku',
    });

    expect(
      transformResolutionToResolvableUrlv243(routeWithSeoData).data.title,
    ).toEqual('');
  });

  it('should transform null routes to the not found response', () => {
    expect(
      transformResolutionToResolvableUrlv243(null),
    ).toEqual(DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION);
  });
});
