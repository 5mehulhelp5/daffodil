import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffGenericNavigationTree } from '@daffodil/navigation';

export enum DaffNavigationActionTypes {
  NavigationLoadAction = '[@daffodil/navigation] Navigation Load Action',
  NavigationLoadSuccessAction = '[@daffodil/navigation] Navigation Load Success Action',
  NavigationLoadFailureAction = '[@daffodil/navigation] Navigation Load Failure Action'
}

export class DaffNavigationLoad implements Action {
  readonly type = DaffNavigationActionTypes.NavigationLoadAction;

  constructor(public payload?: string) { }
}

export class DaffNavigationLoadSuccess<T extends DaffGenericNavigationTree<T>> implements Action {
  readonly type = DaffNavigationActionTypes.NavigationLoadSuccessAction;

  constructor(public payload: T) { }
}

export class DaffNavigationLoadFailure implements Action {
  readonly type = DaffNavigationActionTypes.NavigationLoadFailureAction;

  constructor(public payload: DaffStateError) { }
}

export type DaffNavigationActions<T extends DaffGenericNavigationTree<T>> =
  | DaffNavigationLoad
  | DaffNavigationLoadSuccess<T>
  | DaffNavigationLoadFailure;
