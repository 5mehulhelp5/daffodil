export interface MagentoRoutable {
  /**
   * The relative path for the route.
   */
  relative_url: string;

  /**
   * The type of route, typically PRODUCT, CATEGORY or CMS_PAGE
   */
  type: 'UNKNOWN' | null;

  /**
   * The HTTP code for the page.
   */
  redirect_code: number;
}
