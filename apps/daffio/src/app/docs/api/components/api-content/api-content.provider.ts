import { DaffioDocsApiContentComponent } from './api-content.component';
import { provideDaffioDocsDynamicContentComponents } from '../../../dynamic-content/dynamic-content-components.token';

export const provideDaffioDocsApiContentComponent = () => provideDaffioDocsDynamicContentComponents(DaffioDocsApiContentComponent);
