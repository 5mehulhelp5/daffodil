import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffCustomerPaymentAuthorizeNetApplyRequest } from '@daffodil/customer-payment-authorizenet';
import { DaffPaymentResponse } from '@daffodil/payment';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';

export const {
  /**
   * An injection token for the customer authorize.net payment driver.
   */
  token: DaffCustomerPaymentAuthorizeNetPaymentDriver,
  /**
   * Provider function for {@link DaffCustomerPaymentAuthorizeNetPaymentDriver}.
   */
  provider: provideDaffCustomerPaymentAuthorizeNetPaymentDriver,
} = createSingletonInjectionToken<DaffCustomerPaymentAuthorizeNetPaymentDriverInterface>('DaffCustomerPaymentAuthorizeNetPaymentDriver');

/**
 * @inheritdoc
 */
export interface DaffCustomerPaymentAuthorizeNetPaymentDriverInterface extends DaffPaymentDriverInterface<DaffPaymentResponse> {
  generateToken(request: DaffCustomerPaymentAuthorizeNetApplyRequest): Observable<DaffPaymentResponse>;
}
