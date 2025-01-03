/**
 * Data associated with a route.
 */
export interface DaffRouteData {

  /**
   * The canonical url of the route.
   */
  canonical_url?: string;

  /**
   * The meta description of the route.
   */
  meta_description?: string;

  /**
   * The title of the route.
   */
  title?: string;

  /**
   * An associated schema for the route.  See {@link Schema} for full capabilities.
   */
  schema?: Record<string, unknown>;
}
