import { DaffioDocsPackagesContentComponent } from './packages-content.component';
import { provideDaffioDocsDynamicContentComponents } from '../../../dynamic-content/dynamic-content-components.token';

export const provideDaffioDocsPackagesContentComponent = () => provideDaffioDocsDynamicContentComponents(DaffioDocsPackagesContentComponent);
