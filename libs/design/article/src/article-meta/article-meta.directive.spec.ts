import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffArticleMetaDirective } from './article-meta.directive';

@Component({
  template: `
    <h3 daffArticleMeta>Lorem Ipsum</h3>
  `,
  standalone: true,
  imports: [
    DaffArticleMetaDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/article | DaffArticleMetaDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffArticleMeta]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffArticleMeta]',() => {
    it('should add a class of `daff-article__meta` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-article__meta')).toEqual(true);
    });
  });
});
