import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { FunctionsProvider } from "./../../providers/functions/functions";
import { PrinterProvider } from "./../../providers/printer/printer";
import { commands } from "./../../providers/printer/printer-commands";

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
    public loadCtrl: LoadingController,
    private printer: PrinterProvider
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

  // test() {
  //   this.funtion.displayPrints().subscribe(res => {
  //     this.data = res;
  //     console.log(this.data);
  //   });
  // }

  getPay(data) {
    let newData = {
      pay: this.data["pay"],
      userid: this.user.userid
    };

    let printData = {
      date: this.user.date,
      userid: this.user.userid,
      fname: this.user.fname,
      lname: this.user.lname,
      locationid: this.user.locationid,
      worth: this.user.worth
    };

    this.funtion.getPayment(newData).subscribe(res => {
      this.data = res;
      console.log(res);
    });

    let receipt = "";
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.HARDWARE.HW_INIT;
    receipt += commands.TEXT_FORMAT.TXT_4SQUARE;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += "TAGOLOAN WATER DISTRICT";
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += "Tagoloan, 9001 Misamis Oriental";
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += "STATEMENT OF ACCOUNT WATER BILL";
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += commands.HORIZONTAL_LINE.HR_58MM;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_RT;
    receipt += "BILL MONTH: " + "January 2019";
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += "CONSUMER INFORMATION";
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Name: " + printData.fname + printData.lname;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Account No: " + printData.userid;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Meter No.: " + printData.fname + printData.lname;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Type: " + printData.fname + printData.lname;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += "(depends on what type the consumer has.)";
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Starting Rate: " + printData.fname + printData.lname;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += "(depends on what type the consumer has.)";
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += commands.HORIZONTAL_LINE.HR_58MM;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += "CONSUMPTION DETAILS";
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Period Covered: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Previous Reading: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Present Reading: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Bill Amount: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += commands.HORIZONTAL_LINE.HR_58MM;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += "Note: PENALTY FOR LATE PAYMENT";
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Penalty Amount: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Arrears: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "OVER DUE AMOUNT: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "DUE DATE: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += commands.HORIZONTAL_LINE.HR_58MM;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_BOLD_ON;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Note:";
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_BOLD_ON;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt +=
      "Disconnections follows after 2 consecutive unpaid bills. TAGOLOAN WATER DISTRICT implements 2-bill Policy.";
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Meter Reader: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
    receipt += "Date and Time of read: " + printData.locationid;
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_NORMAL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += commands.HORIZONTAL_LINE.HR_58MM;
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += commands.TEXT_FORMAT.TXT_2WIDTH;
    receipt += "THANK YOU";
    receipt += commands.EOL;
    receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
    receipt += commands.TEXT_FORMAT.TXT_BOLD_ON;
    receipt += "©tagoloanwaterdistrict";
    //secure space on footer
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.EOL;
    receipt += commands.EOL;

    let alert = this.alertCtrl.create({
      title: "Select your printer",
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Select printer",
          handler: device => {
            if (!device) {
              this.showToast("Select a printer!");
              return false;
            }
            console.log(device);
            this.print(device, receipt);
          }
        }
      ]
    });

    this.printer
      .enableBluetooth()
      .then(() => {
        this.printer
          .searchBluetooth()
          .then(devices => {
            devices.forEach(device => {
              console.log("Devices: ", JSON.stringify(device));
              alert.addInput({
                name: "printer",
                value: device.address,
                label: device.name,
                type: "radio"
              });
            });
            alert.present();
          })
          .catch(error => {
            console.log(error);
            this.showToast(
              "There was an error connecting the printer, please try again!"
            );
          });
      })
      .catch(error => {
        console.log(error);
        this.showToast("Error activating bluetooth, please try again!");
      });
  }

  noSpecialChars(string) {
    var translate = {
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        æ: "a",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        ý: "y",
        þ: "b",
        ÿ: "y",
        ŕ: "r",
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        Æ: "A",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        Ý: "Y",
        Þ: "B",
        Ÿ: "Y",
        Ŕ: "R"
      },
      translate_re = /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿŕŕÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÝÝÞŸŔŔ]/gim;
    return string.replace(translate_re, function(match) {
      return translate[match];
    });
  }

  print(device, data) {
    console.log("Device mac: ", device);
    console.log("Data: ", data);
    let load = this.loadCtrl.create({
      content: "Printing..."
    });
    load.present();
    this.printer.connectBluetooth(device).subscribe(
      status => {
        console.log(status);
        this.printer
          .printData(this.noSpecialChars(data))
          .then(printStatus => {
            console.log(printStatus);
            let alert = this.alertCtrl.create({
              title: "Successful print!",
              buttons: ["Ok"]
            });
            load.dismiss();
            alert.present();
            this.printer.disconnectBluetooth();
          })
          .catch(error => {
            console.log(error);
            let alert = this.alertCtrl.create({
              title: "There was an error printing, please try again!",
              buttons: ["Ok"]
            });
            load.dismiss();
            alert.present();
            this.printer.disconnectBluetooth();
          });
      },
      error => {
        console.log(error);
        let alert = this.alertCtrl.create({
          title:
            "There was an error connecting to the printer, please try again!",
          buttons: ["Ok"]
        });
        load.dismiss();
        alert.present();
      }
    );
  }
}
