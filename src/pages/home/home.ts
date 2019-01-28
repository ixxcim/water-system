import { Component } from "@angular/core";
import {
  NavController,
  LoadingController,
  AlertController
} from "ionic-angular";
import { StorageProvider } from "./../../providers/local-storage/storage";
import { MenuPage } from "./../menu/menu";
import { AuthenticationProvider } from "./../../providers/auth-provider/authentication";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  data = {};
  result: any;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public storage: StorageProvider,
    public auth: AuthenticationProvider
  ) {}

  ionViewDidLoad() {
    let storage = localStorage.getItem("result");
    if (storage) {
      this.navCtrl.setRoot(MenuPage);
    }
  }

  checkSettings() {
    this.storage.setLocalStorage();
  }

  loginUser() {
    let userData = {
      userid: this.data["userid"],
      password: this.data["password"]
    };

    if (userData.userid && userData.password) {
      this.auth.postData(userData).subscribe(res => {
        let userInfos = {
          userid: res.infos.userid,
          fname: res.infos.fname,
          lname: res.infos.lname
        };

        if (res.result == "TRUE") {
          const loader = this.loadingCtrl.create({
            content: "Logging user...",
            duration: 3000
          });
          loader.present();
          this.navCtrl.setRoot(MenuPage, {
            info: userInfos
          });
          localStorage.setItem("result", res.result);
        } else {
          let alert = this.alertCtrl.create({
            title: "Login error",
            message: "Username and Password not found.",
            buttons: ["Ok"]
          });
          alert.present();
        }
      });
    } else if (
      (!userData.userid && !userData.password) ||
      !userData.userid ||
      !userData.password
    ) {
      let alert = this.alertCtrl.create({
        title: "Login error",
        message: "Please fill the input.",
        buttons: ["Ok"]
      });
      alert.present();
    }
  }
}
