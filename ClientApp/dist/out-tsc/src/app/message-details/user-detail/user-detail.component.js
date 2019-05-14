import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MessageDetailService } from 'src/app/shared/message-detail.service';
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(service) {
        var _this = this;
        this.service = service;
        this.service.GetAllUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    }
    /* onSubmit() {
       console.log(this.selectedUser);
       alert(this.selectedUser);
     }*/
    UserDetailComponent.prototype.onChange = function (e) {
        console.log(e); //you will get the id
        this.service.sendername = e;
    };
    UserDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-detail',
            templateUrl: './user-detail.component.html',
            providers: [MessageDetailService],
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [MessageDetailService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
export { UserDetailComponent };
//# sourceMappingURL=user-detail.component.js.map