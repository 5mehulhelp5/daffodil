import {
  daffUriTruncateLeadingSlash,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION } from '@daffodil/external-router/driver';
import {
  magentoTransformRedirectToHttpCode,
  MagentoRoute,
} from '@daffodil/external-router/driver/magento';

import { transformSchema } from './schema/transform-schema';

export const transformResolutionToResolvableUrlv243 = (
  resolution: MagentoRoute,
): DaffExternallyResolvableUrl  => (resolution && (resolution.type === 'CATEGORY' || resolution.type ==='PRODUCT') ? {
  id: resolution.uid,
  url: daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(resolution.relative_url)),
  type: resolution.type,
  code: magentoTransformRedirectToHttpCode(resolution.redirect_code),
  data: {
    canonical_url: resolution?.canonical_url,
    title: resolution.meta_title ?? resolution.name ?? '',
    meta_description: resolution.meta_description,
    schema: {
      ...transformSchema(resolution),
    },
  },
} : DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION);
