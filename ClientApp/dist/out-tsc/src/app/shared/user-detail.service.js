import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var UserDetailService = /** @class */ (function () {
    function UserDetailService(_http) {
        var _this = this;
        this._http = _http;
        this.GetAllUsers = function () {
            return _this._http.get(_this.actionUrl)
                .map(function (response) { return response.json(); });
        };
        this.actionUrl = 'http://localhost:5000/api/users';
    }
    UserDetailService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], UserDetailService);
    return UserDetailService;
}());
export { UserDetailService };
//# sourceMappingURL=user-detail.service.js.map