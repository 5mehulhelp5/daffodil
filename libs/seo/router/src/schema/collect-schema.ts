import { ActivatedRouteSnapshot } from '@angular/router';

import { collect } from '@daffodil/core';
import { Schema } from '@daffodil/seo';

/**
 * Collects and deduplicates schema provided on an activated route.
 *
 * Note that this function is unfortunately odd due to [ParamsInheritanceStrategy](https://angular.dev/api/router/RouterConfigOptions#paramsInheritanceStrategy) causing multiple instances of
 * the same schema to be merged together since the data is inherited down the tree.
 */
export const collectSchemaFromRoutes = (route: ActivatedRouteSnapshot): Schema<unknown> => {
  const routes = collect(route, (r) => r.children);
  return [...new Set(routes.map((r) => r.data?.daffSeoData?.schema).filter((el) => el))];
};
