import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageProvider {
  data: any;
  address: any;
  constructor(public alertCtrl: AlertController, private storage: Storage) {}

  setLocalStorage() {
    const prompt = this.alertCtrl.create({
      title: "Settings",
      message: "Change local storage IP address",
      inputs: [
        {
          name: "ipaddress",
          placeholder: "Ex. 192.168.1.1"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Save",
          handler: data => {
            localStorage.setItem("ipaddress", data.ipaddress);

            console.log(JSON.stringify(data));
            console.log(data.ipaddress);
          }
        }
      ]
    });
    prompt.present();
  }
}
