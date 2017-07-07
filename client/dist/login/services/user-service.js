"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(i<3?n(a):i>3?n(e,o,a):n(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},__param=this&&this.__param||function(t,e){return function(o,r){e(o,r,t)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/add/operator/map");var core_2=require("angular2-cookie/core"),UserService=function(){function t(t,e){this._http=t,this.cookie=e,this.authenticationCallbacks=[]}return e=t,t.prototype.login=function(t,o){return this._http.post(e.ENDPOINT+"authenticate",{username:t,password:o}).map(function(t){return t.json()})},t.prototype.getApiTokens=function(){return this._http.get(e.ENDPOINT+"tokens").map(function(t){return t.json()})},t.prototype.newApiToken=function(){return this._http.post(e.ENDPOINT+"tokens",{}).map(function(t){return t.json()})},t.prototype.deleteApiToken=function(t){return this._http.post(e.ENDPOINT+"tokens/delete",{token:t}).map(function(t){return t.json()})},t.prototype.logout=function(){this.cookie.remove("wb_token"),this.authorized(!1)},t.prototype.verify=function(t){return this._http.get(e.ENDPOINT+"verify").map(function(t){return t.json()})},t.prototype.observeAuthentication=function(t){this.authenticationCallbacks.push(t)},t.prototype.authorized=function(t){this.authenticationCallbacks.forEach(function(e){e(t)})},t.ENDPOINT="/api/user/",t=e=__decorate([core_1.Injectable(),__param(0,core_1.Inject(http_1.Http)),__metadata("design:paramtypes",[http_1.Http,core_2.CookieService])],t);var e}();exports.UserService=UserService;