import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_SEARCH_INVALID_API_RESPONSE_ERROR_CODE = 'DAFF_SEARCH_INVALID_API_RESPONSE';

/**
 * A general error indicating that the platform returned a response which cannot be processed.
 */
export class DaffSearchInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_SEARCH_INVALID_API_RESPONSE_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
