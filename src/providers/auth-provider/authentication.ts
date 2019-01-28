import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationProvider {
  localAddress = localStorage.getItem("ipaddress");

  constructor(private http: HttpClient) {}

  postData(credentials) {
    let url =
      "http://" +
      this.localAddress +
      "/watersystem/index.php/login/login_mobile/";
    return this.http.post(url, JSON.stringify(credentials));
  }
}
