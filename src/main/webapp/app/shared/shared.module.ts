import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GynieSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GynieSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GynieSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GynieSharedModule {
  static forRoot() {
    return {
      ngModule: GynieSharedModule
    };
  }
}
