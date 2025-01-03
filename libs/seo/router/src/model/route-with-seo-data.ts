import { Route } from '@angular/router';

import { Schema } from '@daffodil/seo';

/**
 * An interface that extends Angular's Route to include
 * support for seo structures. This helps add route-specific
 * metadata for SEO and search engines.
 */
export interface DaffRouteWithSeoData<T> extends Route {
  data?: {
    daffSeoData?: {
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
      schema?: Schema<T>;
    };
  } & Route['data'];
}


