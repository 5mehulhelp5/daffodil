import {
  APP_INITIALIZER,
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffSchemaEffect } from './schema.effect';

/**
 * An initializer function that begins effect subscription.
 */
const initialize = (effect: DaffSchemaEffect): () => void => () => {
  effect.updateSchema$().subscribe();
};

/**
 * A provider that enables the automatic insertion of schema into a document
 * when a route with appropriately configured data is loaded.
 */
export const provideDaffSeoRouterSchema = (): EnvironmentProviders => makeEnvironmentProviders([
  DaffSchemaEffect,
  {
    provide: APP_INITIALIZER,
    useFactory: initialize,
    deps: [DaffSchemaEffect],
    multi: true,
  },
]);
