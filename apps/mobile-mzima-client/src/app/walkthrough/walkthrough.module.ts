import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MzimaUiModule } from '@mzima-client/mzima-ui';
import { SharedModule } from '../shared/shared.module';

import { WalkthroughPageRoutingModule } from './walkthrough-routing.module';

import { WalkthroughPage } from './walkthrough.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkthroughPageRoutingModule,
    MzimaUiModule,
    TranslateModule,
    MatIconModule,
    SharedModule,
  ],
  declarations: [WalkthroughPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WalkthroughPageModule {}
