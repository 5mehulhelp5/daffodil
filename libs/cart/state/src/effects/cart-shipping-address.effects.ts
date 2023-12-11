import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffCartAddress,
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartShippingAddressDriver,
  DaffCartShippingAddressServiceInterface,
} from '@daffodil/cart/driver';
import { catchAndArrayifyErrors } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';

import {
  DaffCartShippingAddressActionTypes,
  DaffCartShippingAddressLoad,
  DaffCartShippingAddressLoadSuccess,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingAddressUpdate,
  DaffCartShippingAddressUpdateSuccess,
  DaffCartShippingAddressUpdateFailure,
} from '../actions/public_api';
import { DAFF_CART_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffCartShippingAddressEffects<T extends DaffCartAddress, V extends DaffCart> {
  constructor(
    private actions$: Actions,
    @Inject(DAFF_CART_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
    @Inject(DaffCartShippingAddressDriver) private driver: DaffCartShippingAddressServiceInterface<T, V>,
    private storage: DaffCartStorageService,
  ) {}


  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction),
    switchMap((action: DaffCartShippingAddressLoad) =>
      this.driver.get(this.storage.getCartId()).pipe(
        map((resp: T) => new DaffCartShippingAddressLoadSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartShippingAddressLoadFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));


  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction),
    switchMap((action: DaffCartShippingAddressUpdate<T>) =>
      this.driver.update(this.storage.getCartId(), action.payload).pipe(
        map((resp: V) => new DaffCartShippingAddressUpdateSuccess(resp)),
        catchAndArrayifyErrors(error => of(new DaffCartShippingAddressUpdateFailure(error.map(this.errorMatcher)))),
      ),
    ),
  ));
}
