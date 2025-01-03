export interface MagentoProductRoute {
  /**
   * The relative path for the route.
   */
  relative_url: string;

  /**
   * The type of route, typically PRODUCT, CATEGORY or CMS_PAGE
   */
  type: 'PRODUCT';

  /**
   * The HTTP code for the page.
   */
  redirect_code: number;

  /**
   * In v2.4.3 this became the standard field across types
   */
  uid: string;

  /**
   * The canonical url of the route.
   */
  canonical_url: string | null;

  /**
   * The meta description of the route
   */
  meta_description: string | null;

  /**
   * The name of the route
   */
  name: string;

  /**
   * The title of the route
   */
  meta_title: string | null;

  /**
   * The sku of a product.
   */
  sku: string;

  /**
   * The number of reviews of a product.
   */
  review_count: number | null;

  /**
   * The rating of a product.
   */
  rating_summary: number | null;

  /**
   * The images of a product.
   */
  image?: { url: string};

  /**
   * The type of route.
   */
  __typename: string;

  /**
   * The price of the item.
   */
  price_range: {
    maximum_price: {
      final_price: { currency: string; value: number };
      regular_price: { currency: string; value: number };
    };
    minimum_price: {
      final_price: { currency: string; value: number };
      regular_price: { currency: string; value: number };
    };
  };

  /**
   * The stock status of a product.
   */
  stock_status: 'IN_STOCK' | 'OUT_OF_STOCK';
}
