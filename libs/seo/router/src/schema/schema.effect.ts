import {
  Injectable,
  OnDestroy,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationCancel,
  NavigationError,
  Router,
} from '@angular/router';
import {
  Observable,
  of,
  Subject,
} from 'rxjs';
import {
  filter,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import { DaffSchemaService } from '@daffodil/seo';

import { collectSchemaFromRoutes } from './collect-schema';

/**
 * An effect for tracking routing events and subsequently
 * inserting or removing schema from the document.
 */
@Injectable()
export class DaffSchemaEffect implements OnDestroy {

  private destroy$: Subject<void> = new Subject();

  constructor(
    private service: DaffSchemaService<unknown>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  updateSchema$(): Observable<void> {
    return this.router.events.pipe(
      filter(
        (e) => e instanceof ActivationEnd ||
					e instanceof NavigationCancel ||
					e instanceof NavigationError,
      ),
      takeUntil(this.destroy$),
      switchMap((e) => of(this.service.upsert(collectSchemaFromRoutes(this.activatedRoute.snapshot)))),
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
