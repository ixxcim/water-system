import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { FunctionsProvider } from "./../../providers/functions/functions";

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
  data = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public funtion: FunctionsProvider,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController
  ) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log(this.user.fname);

    this.user.fname;
    console.log(this.user.userid);
  }

  showToast(data) {
    let toast = this.toastCtrl.create({
      duration: 3000,
      message: data,
      position: "bottom"
    });
    toast.present();
  }

  getPay() {
    let newData = {
      pay: this.data["pay"],
      userid: this.user.userid
    };

    this.funtion.getPayment(newData).subscribe(res => {
      this.data = res;
      console.log(res);
    });
  }
}
