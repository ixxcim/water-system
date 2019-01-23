import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StorageProvider } from "./../local-storage/storage";

@Injectable()
export class FunctionsProvider {
  data: any;
  address: any;
  localAddress = localStorage.getItem("ipaddress");
  constructor(private http: HttpClient, public storage: StorageProvider) {}

  displayZones(data) {
    let url =
      "http://" +
      this.localAddress +
      "/watersystem/index.php/Welcome/search_zone/";
    return this.http.post(url, JSON.stringify(data));
  }

  displayPosts() {
    let url =
      "http://" +
      this.localAddress +
      "/watersystem/index.php/Welcome/display_post/";
    return this.http.get(url);
  }

  getPayment(data) {
    let url =
      "http://" +
      this.localAddress +
      "/watersystem/index.php/Welcome/paying_bill/";
    return this.http.post(url, JSON.stringify(data));
  }

  updateData(data) {
    let url =
      "http://" +
      this.localAddress +
      "/watersystem/index.php/Welcome/update_bill/";
    return this.http.post(url, JSON.stringify(data));
  }
}
