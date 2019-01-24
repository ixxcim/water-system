import { Component } from "@angular/core";
import {
  NavController,
  LoadingController,
  AlertController
} from "ionic-angular";
import { StorageProvider } from "./../../providers/local-storage/storage";
import { MenuPage } from "./../menu/menu";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public storage: StorageProvider
  ) {}

  checkSettings() {
    this.storage.setLocalStorage();
  }

  loginUser() {
    if (localStorage.getItem("ipaddress") === null) {
      let alert = this.alertCtrl.create({
        title: "Login error",
        message: "Please input value in settings.",
        buttons: ["Ok"]
      });
      alert.present();
    } else {
      this.navCtrl.push(MenuPage);
    }
  }
}
