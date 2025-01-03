export interface MagentoCategoryRouteProduct {
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
   * The name of the route
   */
  name: string | null;

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
  review_count: number;

  /**
   * The rating of a product.
   */
  rating_summary: number;

  /**
   * The images of a product.
   */
  image: { url: string};

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
   * The type of route.
   */
  __typename: string;
}
