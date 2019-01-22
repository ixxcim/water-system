import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FunctionsProvider {
  data: any;
  constructor(private http: HttpClient) {}

  displayZones(data) {
    let url = "http://localhost/watersystem/index.php/Welcome/search_zone/";
    return this.http.post(url, JSON.stringify(data));
  }
}
