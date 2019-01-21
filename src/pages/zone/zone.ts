import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone',
  templateUrl: 'zone.html'
})
export class ZonePage {
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient
  ) {}

  ionViewDidLoad() {
    this.displayData();
  }

  displayData() {
    let url = 'http://localhost/mj/index.php/jumoc/display';
    this.httpClient.get(url).subscribe(data => {
      this.data = data[0];
      console.log(data[0]);
    });
  }
}
