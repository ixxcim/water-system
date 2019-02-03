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
  res: any;
  data = {};
  printed: any;

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
    this.res = navParams.get("res");
  }

  ionViewDidLoad() {
    console.log(this.user.contact);
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
    });

    let printData = {
      date: this.user.date,
      userid: this.user.userid,
      fname: this.user.fname,
      lname: this.user.lname,
      locationid: this.user.locationid,
      worth: this.user.worth
    };

    this.funtion.getPrints(newData).subscribe(jhunes => {
      this.printed = jhunes[0];

      // console.log(this.printed[0].measure);

      let printItem = {
        acrylic: this.printed[0].acrylic,
        description: this.printed[0].description,
        location: this.printed[0].location,
        fname: this.printed[0].fname,
        lname: this.printed[0].lname,
        // measure: this.printed[0].measure,
        month: this.printed[0].month,
        price: this.printed[0].price,
        userid: this.printed[0].userid,
        worth: this.printed[0].worth,
        meterno: this.printed[0].meterno,
        meterbrand: this.printed[0].meterbrand,
        dateTime: new Date()
      };

      // Calculation for after due date
      // let current_bill = printItem.measure;
      let arrears = printItem.acrylic;

      // let parseBill = parseInt(current_bill);
      // let parseArrs = parseInt(arrears);

      // let total_bill = parseBill + parseArrs;

      // const after_due_date = total_bill * 0.1;

      // Description

      // Calculate day
      let date = this.printed[0].month;
      let dateArr = date.split("-");
      let year = dateArr[0];
      let month = dateArr[1];
      let day = dateArr[2];
      let int2 = parseInt(day, 10);
      let addDay = int2 + 7;
      const fullDate = year + "-" + month + "-" + addDay;

      // Wroth + 5
      let worth = printItem.worth;
      let int = parseInt(worth, 10);
      let parseData = int + 5;

      console.log(printItem);

      let receipt = "";
      receipt += commands.EOL;
      receipt += commands.EOL;
      receipt += commands.EOL;
      //secure space on header
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
      receipt += "BILL MONTH: " + printItem.month;
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
      receipt += "Meter No.: " + printItem.meterno;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt += "Address: " + printItem.location;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt += "Meter Type: " + printItem.meterbrand;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt += "Type: " + printItem.description;
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
      receipt += "Period Covered: " + printItem.month;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      // receipt += "Previous Reading: " + printItem.measure + "cm";
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      // receipt += "Present Reading: " + printItem.measure + "cm";
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      // receipt += "Current Bill: " + parseBill + ".00";
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      // receipt += "Arrears: " + parseArrs + ".00";
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      // receipt += "Total Bill: " + total_bill + ".00";
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
      receipt += "Due Date: " + fullDate;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      // receipt += "After Due Date: " + after_due_date;
      receipt += commands.EOL;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
      receipt += commands.HORIZONTAL_LINE.HR_58MM;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_BOLD_ON;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt += commands.EOL;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt += "Meter Reader: ADMIN";
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt += "Date and Time of read: " + printItem.dateTime;
      receipt += commands.EOL;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_CT;
      receipt += "PAHINUMDUM";
      receipt += commands.EOL;
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt +=
        "1. Palihog Bayari kining Water bill sa dili pa ang `DUE DATE` aron malikayan ang 10% nga penalty.";
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt +=
        "2. Duha ka bulan nga bill kon dili mabayaran mahimo nang putlan sa serbisyo sa tubig sa pag-abot sa CUTTING DATE.  ";
      receipt += commands.EOL;
      receipt += commands.TEXT_FORMAT.TXT_NORMAL;
      receipt += commands.TEXT_FORMAT.TXT_ALIGN_LT;
      receipt +=
        "3. Ang opisina DILI na modawat ug REKLAMO o COMPLAIN TULO KA ADLAW human madawat ang inyong bill sa tubig.  ";
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
