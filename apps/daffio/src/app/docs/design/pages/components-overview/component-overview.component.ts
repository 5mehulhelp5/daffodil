import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  switchMap,
  map,
  Observable,
} from 'rxjs';

import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';
import { DaffDocsDesignGuideNavList } from '@daffodil/docs-utils';
import { DaffRouterActivatedRoute } from '@daffodil/router';

@Component({
  selector: 'daffio-docs-design-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    DAFF_CARD_COMPONENTS,
    DAFF_HERO_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
  ],
})
export class DaffioDocsDesignComponentOverviewPageComponent implements OnInit {
  components$: Observable<Array<DaffDocsDesignGuideNavList>>;

  constructor(
    private route: DaffRouterActivatedRoute,
  ) {}

  ngOnInit() {
    this.components$ = this.route.route$.pipe(
      switchMap((route) => route.data),
      map((data) => data.index),
      map((docsList: DaffDocsDesignGuideNavList) =>
        docsList
          .children
          .find(({ id }) => id === 'components')
          .children
          .filter(({ id }) => !!id)
          .flatMap((d) => d.children.length ? d.children : d),
      ),
    );
  }
}
