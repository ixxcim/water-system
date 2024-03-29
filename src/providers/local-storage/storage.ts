import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "ionic-angular";

@Injectable()
export class StorageProvider {
  data: any;
  address: any;
  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  public setLocalStorage() {
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
            const toast = this.toastCtrl.create({
              message:
                "The IP " +
                data.ipaddress +
                " was added successfully in your local storage",
              duration: 3000
            });
            toast.present();
          }
        }
      ]
    });
    prompt.present();
  }
}
