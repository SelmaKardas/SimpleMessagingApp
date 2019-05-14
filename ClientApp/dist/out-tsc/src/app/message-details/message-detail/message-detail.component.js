import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MessageDetailService } from 'src/app/shared/message-detail.service';
var MessageDetailComponent = /** @class */ (function () {
    function MessageDetailComponent(service) {
        var _this = this;
        this.service = service;
        this.service.GetAllUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    }
    MessageDetailComponent.prototype.onChange_recepient = function (e) {
        this.service.formData.RecipientName = e;
        console.log('Selected recepient is: ' + this.service.formData.RecipientName);
    };
    MessageDetailComponent.prototype.onChange_sender = function (e) {
        this.service.formData.SenderName = e;
        console.log('Selected sender is: ' + this.service.formData.SenderName);
    };
    MessageDetailComponent.prototype.onReset = function () {
        this.resetForm();
        this.service.changeSelectedrow(-1);
    };
    MessageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.service.currentMessage.subscribe(function (selectedRowIndex) { return _this.selectedRowIndex = selectedRowIndex; });
    };
    MessageDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.form.reset();
        this.service.formData = {
            MessageId: 0,
            MessageBody: '',
            SenderName: '',
            RecipientName: '',
            CreationDate: ''
        };
    };
    MessageDetailComponent.prototype.onSubmit = function (form) {
        if (!(this.service.formData.SenderName == '') && !(this.service.formData.RecipientName == '')) {
            var num = 0;
            if (!(this.service.formData.RecipientName == 'allUsers')) {
                this.insertRecord(form);
            }
            else {
                for (num = 0; num < this.users.length; num++) {
                    if (!(this.users[num].UserName == this.service.formData.SenderName)) {
                        this.service.formData.RecipientName = this.users[num].UserName;
                        this.insertRecord(form);
                    }
                }
            }
            this.service.changeSelectedrow(-1);
        }
    };
    MessageDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postMessage().subscribe(function (res) {
            _this.resetForm(form);
            _this.service.refreshList();
        }, function (err) {
            debugger;
            console.log(err);
        });
    };
    MessageDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-message-detail',
            templateUrl: './message-detail.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [MessageDetailService])
    ], MessageDetailComponent);
    return MessageDetailComponent;
}());
export { MessageDetailComponent };
//# sourceMappingURL=message-detail.component.js.map