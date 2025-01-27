import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

/**
 * An interface describing best sellers redux state.
 * @deprecated in favor of features from `@daffodil/related-products/state` and `@daffodil/upsell-products/state`.
 */
export interface DaffBestSellersReducerState {
  /**
   * Product ids for best selling products.
   */
  productIds: DaffProduct['id'][];
  /**
   * Whether any best selling products are loading.
   */
  loading: boolean;
  /**
   * Any products associated with loading best selling products.
   */
  errors: DaffStateError[];
}
