import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthenticationProvider } from '../../providers/auth-provider/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userDetails: any;
  responseData: any;

  userPostData = {
    "username": "",
    "password": ""
  };

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private storage: Storage
  ) {}

  logForm() {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
  
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
  }

  checkSettings() {
    const prompt = this.alertCtrl.create({
      title: 'Settings',
      message: "Change local storage IP address",
      inputs: [
        {
          name: 'ipaddress',
          placeholder: 'Ex. 192.168.1.1'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.storage.set('ipaddress', data.ipaddress);
            console.log(JSON.stringify(data));
            console.log(data.ipaddress);
          }
        }
      ]
    });
    prompt.present();
  }

  // getData() {
  //   this.storage.get('ipaddress').then((name) => {
  //     console.log('Your name is', name);
  //   });
  // }
}
