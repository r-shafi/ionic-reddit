import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellPage } from './shell/shell.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ShellPage],
  imports: [CommonModule, ShellRoutingModule, IonicModule],
})
export class ShellModule {}
