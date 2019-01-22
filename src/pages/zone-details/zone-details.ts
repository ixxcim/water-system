import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { ZoneUserPage } from './../zone-user/zone-user';

/**
 * Generated class for the ZoneDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-zone-details',
  templateUrl: 'zone-details.html',
})
export class ZoneDetailsPage {
  user: any;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.user = navParams.get('user');
    this.initializeItems();
  }

  initializeItems() {
    this.data = this.navParams.get('data');
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data = this.data.filter((datas) => {
        console.log(datas.fname);
        return (datas.userid.toLowerCase().indexOf(val.toLowerCase()) > -1);
   
      })
    }
  }

  getUser(data) {
    this.navCtrl.push(ZoneUserPage, {
      user : data,
    })
    console.log(data);
  }
}
