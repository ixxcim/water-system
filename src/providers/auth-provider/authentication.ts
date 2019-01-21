import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationProvider {

  apiUrl = 'http://yourdomain.com/PHP-Slim-Restful/api/';

  constructor(private http: HttpClient) {}

    postData(credentials, type) {
   
            this.http.post(this.apiUrl + type, JSON.stringify(credentials))
            .subscribe(res => {
             
            }, (err) => {
             
            });
    }

}
