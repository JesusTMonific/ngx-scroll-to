import { NgModule } from '@angular/core';

import { OffsetOnlyRoutingModule } from './offset-only-routing.module';
import { OffsetOnlyComponent } from './offset-only.component';
import { ScrollToModule } from '@monific/ng-scroll-to';

@NgModule({
  imports: [
    OffsetOnlyRoutingModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    OffsetOnlyComponent
  ]
})
export class OffsetOnlyModule {}
