import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.page.html',
  styleUrls: ['./shell.page.scss'],
})
export class ShellPage implements OnInit {
  constructor(private menuControl: MenuController) {}

  ngOnInit() {}

  async openMenu() {
    await this.menuControl.open();
  }
}
