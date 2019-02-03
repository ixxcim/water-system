import { Component } from "@angular/core";
import {
  ModalController,
  Platform,
  NavParams,
  ViewController,
  NavController
} from "ionic-angular";
import { ZoneUserPage } from "./../zone-user/zone-user";
import { FunctionsProvider } from "./../../providers/functions/functions";

/**
 * Generated class for the ZoneDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-zone-details",
  templateUrl: "zone-details.html"
})
export class ZoneDetailsPage {
  user: any;
  data: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public funtion: FunctionsProvider
  ) {
    this.user = navParams.get("user");
    this.initializeItems();
  }

  initializeItems() {
    this.data = this.navParams.get("data");
    console.log(this.data.length);
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.data = this.data.filter(datas => {
        //  console.log(datas.fname);
        return datas.userid.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  getUser(data) {
    this.funtion.postProblem(data).subscribe(res => {
      this.data = res[0];
      console.log(this.data);
    });
    this.navCtrl.push(ZoneUserPage, {
      user: data
    });
    console.log(data);
  }
}
