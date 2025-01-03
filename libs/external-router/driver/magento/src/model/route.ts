import { MagentoCategoryRoute } from './category-route';
import { MagentoProductRoute } from './product-route';
import { MagentoRoutable } from './routable';

export type MagentoRoute = MagentoRoutable | MagentoProductRoute | MagentoCategoryRoute;
