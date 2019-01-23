import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "./../pages/home/home";
import { MenuPage } from "./../pages/menu/menu";

import { ZonePage } from "./../pages/zone/zone";
import { ZoneDetailsPage } from "./../pages/zone-details/zone-details";
import { ZoneUserPage } from "./../pages/zone-user/zone-user";

import { PostPage } from "./../pages/post/post";
import { EditPage } from "./../pages/edit/edit";
import { PrintPage } from "./../pages/print/print";

import { PrinterProvider } from "./../providers/printer/printer";
import { AuthenticationProvider } from "./../providers/auth-provider/authentication";
import { StorageProvider } from "./../providers/local-storage/storage";
import { FunctionsProvider } from "./../providers/functions/functions";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ZonePage,
    ZoneDetailsPage,
    ZoneUserPage,
    PostPage,
    EditPage,
    PrintPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ZonePage,
    ZoneDetailsPage,
    ZoneUserPage,
    PostPage,
    EditPage,
    PrintPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BluetoothSerial,
    PrinterProvider,
    AuthenticationProvider,
    StorageProvider,
    FunctionsProvider
  ]
})
export class AppModule {}
