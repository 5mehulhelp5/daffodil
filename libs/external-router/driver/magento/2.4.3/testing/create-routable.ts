import { faker } from '@faker-js/faker';

import { MagentoRoutable } from '../../src/model/routable';

export const createMagentoRoutable = (partial: Partial<MagentoRoutable> = {}): MagentoRoutable => ({
  redirect_code: 0,
  relative_url: faker.datatype.string(16),
  type: null,
  ...partial,
});
