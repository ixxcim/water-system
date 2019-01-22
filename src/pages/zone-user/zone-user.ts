import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ZoneUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-zone-user",
  templateUrl: "zone-user.html"
})
export class ZoneUserPage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log(this.user.fname);

    this.user.fname;
  }

  getPay() {}
}
