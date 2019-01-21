import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {}

  loginUser() {
    this.navCtrl.push(MenuPage);
    const loader = this.loadingCtrl.create({
      content: 'Logging In...',
      duration: 3000
    });
    loader.present();
  }

  checkSettings() {
    this.navCtrl.push(SettingsPage);
  }
}
