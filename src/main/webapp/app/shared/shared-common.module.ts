import { NgModule } from '@angular/core';

import { GynieSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GynieSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GynieSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GynieSharedCommonModule {}
