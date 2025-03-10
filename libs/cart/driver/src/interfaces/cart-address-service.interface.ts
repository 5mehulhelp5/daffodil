import { Observable } from 'rxjs';

import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * The interface responsible for managing the address of a cart.
 */
export interface DaffCartAddressServiceInterface<T extends DaffCart = DaffCart> {
  /**
   * Update the billing and shipping address of a cart
   */
  update(cartId: T['id'], address: Partial<T['shipping_address'] | T['billing_address']>): Observable<Partial<T>>;
}

export const {
  token: DaffCartAddressDriver,
  /**
   * Provider function for {@link DaffCartAddressDriver}.
   */
  provider: provideDaffCartAddressDriver,
} = createSingletonInjectionToken<DaffCartAddressServiceInterface>('DaffCartAddressDriver');
