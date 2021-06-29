import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './shell/pages/home/home.page';
import { ShellPage } from './shell/shell.page';

const routes: Routes = [
  {
    path: '',
    component: ShellPage,
    children: [{ path: '', component: HomePage }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
