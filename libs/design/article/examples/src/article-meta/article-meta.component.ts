import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-meta',
  templateUrl: './article-meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_ARTICLE_COMPONENTS,
  ],
})
export class ArticleMetaComponent {}
