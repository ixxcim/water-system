webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPage');
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit',template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\pages\edit\edit.html"*/'<!--\n\n  Generated template for the EditPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="background"> <ion-title>Edit</ion-title> </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> </ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zone_zone__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_post__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__print_print__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_local_storage_storage__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        this.storage.getLocalStorage();
    };
    MenuPage.prototype.zonePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__zone_zone__["a" /* ZonePage */]);
    };
    MenuPage.prototype.postPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__post_post__["a" /* PostPage */]);
    };
    MenuPage.prototype.editPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_edit__["a" /* EditPage */]);
    };
    MenuPage.prototype.printPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__print_print__["a" /* PrintPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\pages\menu\menu.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton color="background">\n\n    <!-- <ion-buttons float-left>\n\n      <button ion-button icon-only round>\n\n        <ion-icon name="ios-menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n    <ion-title float-left>\n\n      <span class="s-1">water</span>System\n\n      <span class="s-2">Tagoloan Water District</span>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only round>\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <ion-list>\n\n    <ion-item text-center>\n\n      <div class="avatar" margin-bottom>\n\n        <ion-thumbnail>\n\n          <img\n\n            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=adult-beard-boy-220453.jpg&fm=jpg"\n\n          />\n\n        </ion-thumbnail>\n\n      </div>\n\n      <h1>Michael Jumoc</h1>\n\n      <p>Employee</p>\n\n      <ion-grid margin-top>\n\n        <ion-row>\n\n          <ion-col\n\n            ><button\n\n              color="color-1"\n\n              ion-button\n\n              full\n\n              text-capitalize\n\n              class="btn-1"\n\n            >\n\n              My Account\n\n            </button></ion-col\n\n          >\n\n          <ion-col\n\n            ><button\n\n              color="color-2"\n\n              ion-button\n\n              full\n\n              text-capitalize\n\n              class="btn-2"\n\n            >\n\n              Check Settings\n\n            </button></ion-col\n\n          >\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </ion-list> -->\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list>\n\n          <button ion-item (click)="zonePage()" class="item-1">\n\n            <ion-icon\n\n              class="icon-1"\n\n              name="ios-map"\n\n              margin-left\n\n              margin-bottom\n\n            ></ion-icon>\n\n            <h1 margin-left>Zone</h1>\n\n            <p margin-left>4 barangays</p>\n\n          </button>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-list>\n\n          <button ion-item (click)="postPage()" class="item-2">\n\n            <ion-icon\n\n              class="icon-2"\n\n              name="ios-document"\n\n              margin-left\n\n              margin-bottom\n\n            ></ion-icon>\n\n            <h1 margin-left>Post</h1>\n\n            <p margin-left>5 items</p>\n\n          </button>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list>\n\n          <button ion-item (click)="editPage()" class="item-3">\n\n            <ion-icon\n\n              class="icon-3"\n\n              name="ios-create"\n\n              margin-left\n\n              margin-bottom\n\n            ></ion-icon>\n\n            <h1 margin-left>Update</h1>\n\n            <p margin-left>Update post</p>\n\n          </button>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-list>\n\n          <button ion-item (click)="printPage()" class="item-4">\n\n            <ion-icon\n\n              class="icon-4"\n\n              name="ios-print"\n\n              margin-left\n\n              margin-bottom\n\n            ></ion-icon>\n\n            <h1 margin-left>Print</h1>\n\n            <p margin-left>Print post</p>\n\n          </button>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list>\n\n          <button ion-item class="item-5">\n\n            <ion-icon\n\n              class="icon-5"\n\n              name="ios-bluetooth"\n\n              margin-left\n\n              margin-bottom\n\n            ></ion-icon>\n\n            <h1 margin-left>Bluetooth</h1>\n\n            <p margin-left>Configure device</p>\n\n          </button>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-list>\n\n          <button ion-item class="item-6">\n\n            <ion-icon\n\n              class="icon-6"\n\n              name="ios-person"\n\n              margin-left\n\n              margin-bottom\n\n            ></ion-icon>\n\n            <h1 margin-left>Account</h1>\n\n            <p margin-left>View account</p>\n\n          </button>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\pages\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_local_storage_storage__["a" /* StorageProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_functions_functions__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zone_details_zone_details__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZonePage = /** @class */ (function () {
    function ZonePage(navCtrl, navParams, funtion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.funtion = funtion;
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
            'POB-CENTRO',
            ' VILLA VICTORIA',
            'S/COGON',
            'PROMISE LAND',
            'GRACIA',
            'KIBULDA',
            'NATUMOLAN'
        ];
        this.getData(this.item);
    }
    ZonePage.prototype.getData = function (item) {
        var _this = this;
        var newItem = {
            neweritem: item
        };
        this.funtion.displayZones(newItem).subscribe(function (res) {
            _this.data = res;
            console.log(res[0]);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__zone_details_zone_details__["a" /* ZoneDetailsPage */], {
                user: item,
                data: res[0]
            });
        }, function (err) {
            console.log('lol');
            console.log(err);
        });
    };
    ZonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-zone',template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\pages\zone\zone.html"*/'<ion-header>\n\n  <ion-navbar color="background"> <ion-title>Zone</ion-title> </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list  inset>\n\n    <button ion-item *ngFor="let items of item" (click)="getData(items)">\n\n      <h2> {{ items }}</h2>\n\n      <ion-icon\n\n        name="ios-arrow-forward"\n\n        item-end\n\n      ></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\pages\zone\zone.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], ZonePage);
    return ZonePage;
}());

//# sourceMappingURL=zone.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostPage');
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\pages\post\post.html"*/'<!--\n\n  Generated template for the PostPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="background"> <ion-title>Post</ion-title> </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item>\n\n      <h2>Barangay 26</h2>\n\n      <p>Lapasan</p>\n\n      <ion-icon\n\n        name="ios-arrow-forward"\n\n        item-end\n\n        large\n\n        isActive="false"\n\n      ></ion-icon>\n\n    </button>\n\n    <button ion-item>\n\n      <h2>Barangay 26</h2>\n\n      <p>Lapasan</p>\n\n      <ion-icon name="ios-arrow-forward" item-end large></ion-icon>\n\n    </button>\n\n    <button ion-item>\n\n      <h2>Barangay 26</h2>\n\n      <p>Lapasan</p>\n\n      <ion-icon name="ios-arrow-forward" item-end large></ion-icon>\n\n    </button>\n\n    <button ion-item>\n\n      <h2>Barangay 26</h2>\n\n      <p>Lapasan</p>\n\n      <ion-icon name="ios-arrow-forward" item-end large></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\pages\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_printer_printer__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PrintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrintPage = /** @class */ (function () {
    function PrintPage(navCtrl, printer, alertCtrl, loadCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.printer = printer;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.inputData = {};
    }
    PrintPage.prototype.showToast = function (data) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            message: data,
            position: 'bottom'
        });
        toast.present();
    };
    PrintPage.prototype.noSpecialChars = function (string) {
        var translate = {
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            æ: 'a',
            ç: 'c',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            ð: 'd',
            ñ: 'n',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            ý: 'y',
            þ: 'b',
            ÿ: 'y',
            ŕ: 'r',
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            Æ: 'A',
            Ç: 'C',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            Ð: 'D',
            Ñ: 'N',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            Ý: 'Y',
            Þ: 'B',
            Ÿ: 'Y',
            Ŕ: 'R'
        }, translate_re = /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿŕŕÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÝÝÞŸŔŔ]/gim;
        return string.replace(translate_re, function (match) {
            return translate[match];
        });
    };
    PrintPage.prototype.print = function (device, data) {
        var _this = this;
        console.log('Device mac: ', device);
        console.log('Data: ', data);
        var load = this.loadCtrl.create({
            content: 'Printing...'
        });
        load.present();
        this.printer.connectBluetooth(device).subscribe(function (status) {
            console.log(status);
            _this.printer
                .printData(_this.noSpecialChars(data))
                .then(function (printStatus) {
                console.log(printStatus);
                var alert = _this.alertCtrl.create({
                    title: 'Successful print!',
                    buttons: ['Ok']
                });
                load.dismiss();
                alert.present();
                _this.printer.disconnectBluetooth();
            })
                .catch(function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'There was an error printing, please try again!',
                    buttons: ['Ok']
                });
                load.dismiss();
                alert.present();
                _this.printer.disconnectBluetooth();
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'There was an error connecting to the printer, please try again!',
                buttons: ['Ok']
            });
            load.dismiss();
            alert.present();
        });
    };
    PrintPage.prototype.prepareToPrint = function (data) {
        var _this = this;
        // u can remove this when generate the receipt using another method
        if (!data.title) {
            data.title = 'Title';
        }
        if (!data.text) {
            data.text =
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus sapien, aliquam id mattis et, pretium eu libero. In dictum mauris vel lorem porttitor, et tempor neque semper. Aliquam erat volutpat. Aliquam vel malesuada urna, a pulvinar augue. Nunc ac fermentum massa. Proin efficitur purus fermentum tellus fringilla, fringilla aliquam nunc dignissim. Duis et luctus tellus, sed ullamcorper lectus.';
        }
        var receipt = '';
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].HARDWARE.HW_INIT;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_4SQUARE;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_ALIGN_CT;
        receipt += data.title.toUpperCase();
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].EOL;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_NORMAL;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].HORIZONTAL_LINE.HR_58MM;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].EOL;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].HORIZONTAL_LINE.HR2_58MM;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].EOL;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].TEXT_FORMAT.TXT_ALIGN_LT;
        receipt += data.text;
        //secure space on footer
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].EOL;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].EOL;
        receipt += __WEBPACK_IMPORTED_MODULE_3__providers_printer_printer_commands__["a" /* commands */].EOL;
        var alert = this.alertCtrl.create({
            title: 'Select your printer',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Select printer',
                    handler: function (device) {
                        if (!device) {
                            _this.showToast('Select a printer!');
                            return false;
                        }
                        console.log(device);
                        _this.print(device, receipt);
                    }
                }
            ]
        });
        this.printer
            .enableBluetooth()
            .then(function () {
            _this.printer
                .searchBluetooth()
                .then(function (devices) {
                devices.forEach(function (device) {
                    console.log('Devices: ', JSON.stringify(device));
                    alert.addInput({
                        name: 'printer',
                        value: device.address,
                        label: device.name,
                        type: 'radio'
                    });
                });
                alert.present();
            })
                .catch(function (error) {
                console.log(error);
                _this.showToast('There was an error connecting the printer, please try again!');
            });
        })
            .catch(function (error) {
            console.log(error);
            _this.showToast('Error activating bluetooth, please try again!');
        });
    };
    PrintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-print',template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\pages\print\print.html"*/'<!--\n\n  Generated template for the PrintPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="background"> <ion-title>Print</ion-title> </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> </ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\pages\print\print.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_printer_printer__["a" /* PrinterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], PrintPage);
    return PrintPage;
}());

//# sourceMappingURL=print.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit/edit.module": [
		291,
		4
	],
	"../pages/menu/menu.module": [
		292,
		3
	],
	"../pages/post/post.module": [
		293,
		2
	],
	"../pages/print/print.module": [
		294,
		1
	],
	"../pages/zone/zone.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FunctionsProvider = /** @class */ (function () {
    function FunctionsProvider(http) {
        this.http = http;
    }
    FunctionsProvider.prototype.displayZones = function (data) {
        var url = "http://localhost/watersystem/index.php/Welcome/search_zone/";
        return this.http.post(url, JSON.stringify(data));
    };
    FunctionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], FunctionsProvider);
    return FunctionsProvider;
    var _a;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoneDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zone_user_zone_user__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ZoneDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZoneDetailsPage = /** @class */ (function () {
    function ZoneDetailsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.user = navParams.get('user');
        this.initializeItems();
    }
    ZoneDetailsPage.prototype.initializeItems = function () {
        this.data = this.navParams.get('data');
    };
    ZoneDetailsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.data = this.data.filter(function (datas) {
                console.log(datas.fname);
                return (datas.userid.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ZoneDetailsPage.prototype.getUser = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__zone_user_zone_user__["a" /* ZoneUserPage */], {
            user: data,
        });
        console.log(data);
    };
    ZoneDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-zone-details',template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\pages\zone-details\zone-details.html"*/'<!--\n  Generated template for the ZoneDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="background">\n    <ion-title>{{user}}</ion-title>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Search by ID (Ex. 011-123-456)"></ion-searchbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let datas of data" (click)="getUser(datas)">\n      <h2> {{ datas.fname }} {{datas.lname}}</h2>\n      <h3> {{ datas.userid }}</h3>\n      <p> {{ datas.contact }}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\pages\zone-details\zone-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ZoneDetailsPage);
    return ZoneDetailsPage;
}());

//# sourceMappingURL=zone-details.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoneUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ZoneUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZoneUserPage = /** @class */ (function () {
    function ZoneUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = navParams.get("user");
    }
    ZoneUserPage.prototype.ionViewDidLoad = function () {
        console.log(this.user.fname);
        this.user.fname;
    };
    ZoneUserPage.prototype.getPay = function () { };
    ZoneUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-zone-user",template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\pages\zone-user\zone-user.html"*/'<!--\n  Generated template for the ZoneUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="background">\n    <ion-title>{{ user.fname }} {{ user.lname }} </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-right>\n  <ion-list>\n    <ion-item *ngIf="!user.measure">\n      <ion-icon name="sad" item-start></ion-icon>\n      <h2>No data available</h2>\n      <p>Please contact to our office</p>\n    </ion-item>\n\n    <ion-item *ngIf="user.measure">\n      <ion-avatar item-start>\n        <img src="./../../assets/imgs/logo1.png" />\n      </ion-avatar>\n      <h2>{{ user.month }}</h2>\n      <h3>{{ user.measure }}</h3>\n      <p>500</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Pay</ion-label>\n      <ion-input type="number" [(ngModel)]="data.title" name="pay"></ion-input>\n    </ion-item>\n\n    <button ion-button color="primary-1" float-right margin-top text-capitalize>\n      read meter\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\pages\zone-user\zone-user.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], ZoneUserPage);
    return ZoneUserPage;
    var _a, _b;
}());

//# sourceMappingURL=zone-user.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_bluetooth_serial__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrinterProvider = /** @class */ (function () {
    function PrinterProvider(bluetoothSerial) {
        this.bluetoothSerial = bluetoothSerial;
    }
    PrinterProvider.prototype.enableBluetooth = function () {
        return this.bluetoothSerial.enable();
    };
    PrinterProvider.prototype.searchBluetooth = function () {
        return this.bluetoothSerial.list();
    };
    PrinterProvider.prototype.connectBluetooth = function (address) {
        return this.bluetoothSerial.connect(address);
    };
    PrinterProvider.prototype.printData = function (data) {
        return this.bluetoothSerial.write(data);
    };
    PrinterProvider.prototype.disconnectBluetooth = function () {
        return this.bluetoothSerial.disconnect();
    };
    PrinterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], PrinterProvider);
    return PrinterProvider;
}());

//# sourceMappingURL=printer.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_local_storage_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    HomePage.prototype.checkSettings = function () {
        this.storage.setLocalStorage();
    };
    HomePage.prototype.logForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\pages\home\home.html"*/'<ion-content padding>\n\n  <div text-center margin-vertical class="heading">\n\n    <h1 class="heading__title"><span>water</span>System</h1>\n\n    <p text-capitalize class="heading__subtitle ">mobile billing application</p>\n\n  </div>\n\n\n\n  <div margin-top>\n\n    <ion-list inset>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Username"></ion-input>\n\n        <ion-label margin-left\n\n          ><ion-icon name="ios-contact"></ion-icon\n\n        ></ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list inset>\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password"></ion-input>\n\n        <ion-label margin-left><ion-icon name="ios-key"></ion-icon></ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button\n\n      class="btn-link"\n\n      ion-button\n\n      small\n\n      clear\n\n      float-right\n\n      margin-bottom\n\n      text-capitalize\n\n      color="link"\n\n      (click)="checkSettings()"\n\n    >\n\n      Change Settings\n\n    </button>\n\n    <div padding-left padding-right text-center>\n\n      <button\n\n        text-capitalize\n\n        ion-button\n\n        block\n\n        color="secondary-2"\n\n        (click)="logForm()"\n\n      >\n\n        Log in\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_local_storage_storage__["a" /* StorageProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_zone_zone__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_zone_details_zone_details__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_zone_user_zone_user__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_post_post__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_edit__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_print_print__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_printer_printer__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_provider_authentication__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_local_storage_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_functions_functions__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_zone_zone__["a" /* ZonePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_zone_details_zone_details__["a" /* ZoneDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_zone_user_zone_user__["a" /* ZoneUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_print_print__["a" /* PrintPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/print/print.module#PrintPageModule', name: 'PrintPage', segment: 'print', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zone/zone.module#ZonePageModule', name: 'ZonePage', segment: 'zone', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_zone_zone__["a" /* ZonePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_zone_details_zone_details__["a" /* ZoneDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_zone_user_zone_user__["a" /* ZoneUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_print_print__["a" /* PrintPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_17__providers_printer_printer__["a" /* PrinterProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_provider_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_local_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_functions_functions__["a" /* FunctionsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commands; });
//commands based on https://github.com/humbertopiaia/escpos-commands-js/blob/master/src/commands.js
//all the commands below may vary by printer, check the manual
var commands = {
    LF: '\x0a',
    ESC: '\x1b',
    FS: '\x1c',
    GS: '\x1d',
    US: '\x1f',
    FF: '\x0c',
    DLE: '\x10',
    DC1: '\x11',
    DC4: '\x14',
    EOT: '\x04',
    NUL: '\x00',
    EOL: '\n',
    HORIZONTAL_LINE: {
        HR_58MM: '================================',
        HR2_58MM: '********************************'
    },
    FEED_CONTROL_SEQUENCES: {
        CTL_LF: '\x0a',
        CTL_FF: '\x0c',
        CTL_CR: '\x0d',
        CTL_HT: '\x09',
        CTL_VT: '\x0b',
    },
    LINE_SPACING: {
        LS_DEFAULT: '\x1b\x32',
        LS_SET: '\x1b\x33'
    },
    HARDWARE: {
        HW_INIT: '\x1b\x40',
        HW_SELECT: '\x1b\x3d\x01',
        HW_RESET: '\x1b\x3f\x0a\x00',
    },
    CASH_DRAWER: {
        CD_KICK_2: '\x1b\x70\x00',
        CD_KICK_5: '\x1b\x70\x01',
    },
    MARGINS: {
        BOTTOM: '\x1b\x4f',
        LEFT: '\x1b\x6c',
        RIGHT: '\x1b\x51',
    },
    PAPER: {
        PAPER_FULL_CUT: '\x1d\x56\x00',
        PAPER_PART_CUT: '\x1d\x56\x01',
        PAPER_CUT_A: '\x1d\x56\x41',
        PAPER_CUT_B: '\x1d\x56\x42',
    },
    TEXT_FORMAT: {
        TXT_NORMAL: '\x1b\x21\x00',
        TXT_2HEIGHT: '\x1b\x21\x10',
        TXT_2WIDTH: '\x1b\x21\x20',
        TXT_4SQUARE: '\x1b\x21\x30',
        TXT_CUSTOM_SIZE: function (width, height) {
            var widthDec = (width - 1) * 16;
            var heightDec = height - 1;
            var sizeDec = widthDec + heightDec;
            return '\x1d\x21' + String.fromCharCode(sizeDec);
        },
        TXT_HEIGHT: {
            1: '\x00',
            2: '\x01',
            3: '\x02',
            4: '\x03',
            5: '\x04',
            6: '\x05',
            7: '\x06',
            8: '\x07'
        },
        TXT_WIDTH: {
            1: '\x00',
            2: '\x10',
            3: '\x20',
            4: '\x30',
            5: '\x40',
            6: '\x50',
            7: '\x60',
            8: '\x70'
        },
        TXT_UNDERL_OFF: '\x1b\x2d\x00',
        TXT_UNDERL_ON: '\x1b\x2d\x01',
        TXT_UNDERL2_ON: '\x1b\x2d\x02',
        TXT_BOLD_OFF: '\x1b\x45\x00',
        TXT_BOLD_ON: '\x1b\x45\x01',
        TXT_ITALIC_OFF: '\x1b\x35',
        TXT_ITALIC_ON: '\x1b\x34',
        TXT_FONT_A: '\x1b\x4d\x00',
        TXT_FONT_B: '\x1b\x4d\x01',
        TXT_FONT_C: '\x1b\x4d\x02',
        TXT_ALIGN_LT: '\x1b\x61\x00',
        TXT_ALIGN_CT: '\x1b\x61\x01',
        TXT_ALIGN_RT: '\x1b\x61\x02',
    }
};
//# sourceMappingURL=printer-commands.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // let status bar overlay webview
            // if (this.rootPage) {
            //   statusBar.backgroundColorByHexString('#2e4058');
            //   statusBar.show();
            // } else {
            //   statusBar.backgroundColorByHexString('#135589');
            //   statusBar.show();
            // }
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#2c3e50');
            statusBar.show();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\acer\Desktop\water-system\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\acer\Desktop\water-system\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(http) {
        this.http = http;
        this.apiUrl = 'http://yourdomain.com/PHP-Slim-Restful/api/';
    }
    AuthenticationProvider.prototype.postData = function (credentials, type) {
        this.http.post(this.apiUrl + type, JSON.stringify(credentials))
            .subscribe(function (res) {
        }, function (err) {
        });
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageProvider = /** @class */ (function () {
    function StorageProvider(alertCtrl, storage) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    StorageProvider.prototype.setLocalStorage = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Settings',
            message: 'Change local storage IP address',
            inputs: [
                {
                    name: 'ipaddress',
                    placeholder: 'Ex. 192.168.1.1'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.storage.set('ipaddress', data.ipaddress);
                        console.log(JSON.stringify(data));
                        console.log(data.ipaddress);
                    }
                }
            ]
        });
        prompt.present();
    };
    StorageProvider.prototype.getLocalStorage = function () {
        var _this = this;
        return this.storage.get('ipaddress').then(function (name) {
            _this.data = name;
            console.log(name);
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map