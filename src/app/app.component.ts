import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // let status bar overlay webview

      // if (this.rootPage) {
      //   statusBar.backgroundColorByHexString('#2e4058');
      //   statusBar.show();
      // } else {
      //   statusBar.backgroundColorByHexString('#135589');
      //   statusBar.show();
      // }

      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#2c3e50');
      statusBar.show();
      splashScreen.hide();
    });
  }
}
