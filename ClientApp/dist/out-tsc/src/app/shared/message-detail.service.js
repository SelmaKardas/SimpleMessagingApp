import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
var MessageDetailService = /** @class */ (function () {
    function MessageDetailService(http, _http) {
        var _this = this;
        this.http = http;
        this._http = _http;
        this.messageSource = new BehaviorSubject(0);
        this.currentMessage = this.messageSource.asObservable();
        this.dataSource = new MatTableDataSource();
        this.rootURL = 'http://localhost:5000/api';
        this.GetAllUsers = function () {
            return _this._http.get(_this.actionUrl)
                .map(function (response) { return response.json(); });
        };
        this.actionUrl = 'http://localhost:5000/api/users';
    }
    MessageDetailService.prototype.changeSelectedrow = function (row) {
        this.messageSource.next(row);
    };
    MessageDetailService.prototype.postMessage = function () {
        var date = new Date();
        this.formData.CreationDate = date.toDateString();
        return this.http.post(this.rootURL + '/messages', this.formData);
    };
    MessageDetailService.prototype.putMessage = function () {
        return this.http.put(this.rootURL + '/messages/' + this.formData.MessageId, this.formData);
    };
    MessageDetailService.prototype.deleteMessage = function (id) {
        return this.http.delete(this.rootURL + '/messages/' + id);
    };
    MessageDetailService.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.rootURL + '/messages')
            .toPromise()
            .then(function (res) { return _this.dataSource.data = res; });
    };
    MessageDetailService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Http])
    ], MessageDetailService);
    return MessageDetailService;
}());
export { MessageDetailService };
//# sourceMappingURL=message-detail.service.js.map