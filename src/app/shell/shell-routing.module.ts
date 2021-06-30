import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellPage } from './shell/shell.page';

const routes: Routes = [
  {
    path: '',
    component: ShellPage,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
