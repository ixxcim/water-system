import { Component } from "@angular/core";
import {
  NavController,
  LoadingController,
  AlertController,
  
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

  logForm() {
    this.navCtrl.push(MenuPage);
  }
}
