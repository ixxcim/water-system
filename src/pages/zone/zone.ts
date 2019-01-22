import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from './../../providers/functions/functions';
import { ZoneDetailsPage } from './../zone-details/zone-details';
import { ThrowStmt } from '@angular/compiler';

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
  item: any;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public funtion: FunctionsProvider) {
    this.item = [
      'SIHAYON-LEFT',
      'SIHAYON-RIGHT',
      'SIH-R ZONE 6 SIHAYON STA. CRUZ',
      'SIHAYON-R',
      'BUKID-NANGKA',
      'BUKID-ALUBIJID',
      'ALUBIJID, VILLANUEVA',
      'BUKID/BANBAN/NANGKA',
      'BUKID-BANBAN',
      'BANBAN',
      'CORRALES',
      'LOWER, NANGKA',
      'ALUBIJID',
      'BOGUAC',
      'SAN MARTIN',
      'GANGHAAN',
      'STA. CRUZ',
      'MOHON',
     ' POB-HIWAY',
      'POB-R1',
     ' POB-R2',
      'POB-CENTRO',
     ' POB-CENTRO1',
      'POB-CENTRO2',
      'POB-DIKE',
      'BRGY. 1',
      'PULOT VALDERAMA',
     ' BALUARTE',
     ' TTI',
     ' RELOCATION',
      'NATUMOLAN-3',
      'NATUMOLAN-CENTRO',
      'VILLA MANGGA',
      'POB-CENTRO' ,
     ' VILLA VICTORIA',
      'S/COGON',
      'PROMISE LAND',
      'GRACIA',
      'KIBULDA',
      'NATUMOLAN'
    ];

    this.getData(this.item);
  }

  getData(item) {

    let newItem  = {
      neweritem : item
    };
    this.funtion.displayZones(newItem).subscribe(res => {
      
      this.data =  res;
      console.log(res[0]);
      this.navCtrl.push(ZoneDetailsPage, {
        user : item,
        data : res[0]
      })
    },
    err => {
      console.log('lol');
      console.log(err);
    }
    )
  }

}


