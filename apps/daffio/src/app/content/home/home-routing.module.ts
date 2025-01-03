import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
}  from '@angular/router';

import { DaffioHomeViewComponent } from './view/home-view.component';

const homepage: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DaffioHomeViewComponent,
    data: {
      title: 'Modern front-end development toolkit for ecommerce PWAs',
      description: 'Build your store with ease and flexibility — take advantage of the cutting edge with Angular (6+), Redux and Progressive Web Apps.',
      daffSeoData: {
        schema: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'https://www.daff.io',
          sameAs: ['https://www.linkedin.com/company/daffodil-pwa/', 'https://github.com/graycoreio/daffodil'],
          logo: 'https://www.daff.io/assets/appicons/icon-512x512.png',
          name: 'Daffodil',
          description: 'A Modern front-end development toolkit for ecommerce PWAs',
          email: 'hello@graycore.io',
          telephone: '+1-513-394-7356',
        },
      },
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(homepage),
  ],
  exports: [
    RouterModule,
  ],
})
export class DaffioHomeRoutingModule {}
