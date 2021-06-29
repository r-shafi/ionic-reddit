import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellPage } from './shell/shell.page';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './shell/pages/home/home.page';

@NgModule({
  declarations: [ShellPage, HomePage],
  imports: [CommonModule, ShellRoutingModule, IonicModule],
})
export class ShellModule {}
