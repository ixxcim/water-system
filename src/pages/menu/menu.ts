import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { ZonePage } from "./../zone/zone";
import { PostPage } from "./../post/post";
import { EditPage } from "./../edit/edit";
import { PrintPage } from "./../print/print";
import { StorageProvider } from "./../../providers/local-storage/storage";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageProvider,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {}

  zonePage() {
    this.navCtrl.push(ZonePage);
  }

  postPage() {
    this.navCtrl.push(PostPage);
  }

  editPage() {
    this.navCtrl.push(EditPage);
  }

  printPage() {
    this.navCtrl.push(PrintPage);
  }
}
