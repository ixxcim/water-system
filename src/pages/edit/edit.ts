import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FunctionsProvider } from "./../../providers/functions/functions";

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-edit",
  templateUrl: "edit.html"
})
export class EditPage {
  posts: any;
  id: any;
  measure: any;
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public func: FunctionsProvider,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.func.displayPosts().subscribe(data => {
      this.posts = data[0];
      console.log(this.posts);
    });
  }

  updateReading(posts) {
    // let data = {
    //   userid: posts.userid,
    //   measure: posts.measure
    // };

    console.log(posts);
    this.id = posts.userid;
    this.measure = posts.measure;

    const prompt = this.alertCtrl.create({
      title: "Update reading",
      message: "Please check carefully before saving",
      inputs: [
        {
          name: "measure",
          placeholder: this.measure
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
            let newData = {
              userid: this.id,
              pay: data.measure
            };
            console.log(newData);
            this.func.updateData(newData).subscribe(res => {
              this.data = res;
              console.log(this.data);
            });
          }
        }
      ]
    });
    prompt.present();
  }
}
