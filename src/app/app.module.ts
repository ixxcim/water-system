import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ZonePage } from '../pages/zone/zone';
import { PostPage } from '../pages/post/post';
import { EditPage } from '../pages/edit/edit';
import { PrintPage } from '../pages/print/print';
import { SettingsPage } from '../pages/settings/settings';

import { PrinterProvider } from './../providers/printer/printer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ZonePage,
    PostPage,
    EditPage,
    PrintPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ZonePage,
    PostPage,
    EditPage,
    PrintPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BluetoothSerial,
    PrinterProvider
  ]
})
export class AppModule {}
