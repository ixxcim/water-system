import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FunctionsProvider } from "./../../providers/functions/functions";

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-post",
  templateUrl: "post.html"
})
export class PostPage {
  posts: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public func: FunctionsProvider
  ) {}

  ionViewDidLoad() {
    this.func.displayPosts().subscribe(data => {
      this.posts = data[0];
      console.log(data[0]);
    });
  }
}
