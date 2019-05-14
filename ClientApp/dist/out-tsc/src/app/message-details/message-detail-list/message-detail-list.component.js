import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MessageDetailService } from 'src/app/shared/message-detail.service';
import { FormControl } from '@angular/forms';
var MessageDetailListComponent = /** @class */ (function () {
    function MessageDetailListComponent(service) {
        this.service = service;
        this.senderFilter = new FormControl('');
        this.messageFilter = new FormControl('');
        this.recipientFilter = new FormControl('');
        this.dateFilter = new FormControl('');
        this.filterValues = { "MessageBody": "", "SenderName": "", "RecipientName": "", "CreationDate": "" };
        this.displayedColumns = ['SenderName', 'MessageBody', 'RecipientName', 'CreationDate'];
        this.service.dataSource.filterPredicate = this.createFilter();
    }
    MessageDetailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.refreshList();
        this.service.currentMessage.subscribe(function (selectedRowIndex) { return _this.selectedRowIndex = selectedRowIndex; });
        this.senderFilter.valueChanges
            .subscribe(function (SenderName) {
            _this.filterValues.SenderName = SenderName;
            _this.service.dataSource.filter = JSON.stringify(_this.filterValues);
        });
        this.messageFilter.valueChanges
            .subscribe(function (MessageBody) {
            _this.filterValues.MessageBody = MessageBody;
            _this.service.dataSource.filter = JSON.stringify(_this.filterValues);
        });
        this.recipientFilter.valueChanges
            .subscribe(function (RecipientName) {
            _this.filterValues.RecipientName = RecipientName;
            _this.service.dataSource.filter = JSON.stringify(_this.filterValues);
        });
        this.dateFilter.valueChanges
            .subscribe(function (CreationDate) {
            _this.filterValues.CreationDate = CreationDate;
            _this.service.dataSource.filter = JSON.stringify(_this.filterValues);
        });
    };
    MessageDetailListComponent.prototype.createFilter = function () {
        var filterFunction = function (data, filter) {
            var searchTerms = JSON.parse(filter);
            return data.SenderName.toString().toLowerCase().indexOf(searchTerms.SenderName) !== -1
                && data.MessageBody.toString().toLowerCase().indexOf(searchTerms.MessageBody) !== -1
                && data.RecipientName.toString().toLowerCase().indexOf(searchTerms.RecipientName) !== -1
                && data.CreationDate.toString().toLowerCase().indexOf(searchTerms.CreationDate) !== -1;
        };
        return filterFunction;
    };
    MessageDetailListComponent.prototype.onSelectRow = function (event, ms) {
        console.log('Before: ' + this.selectedRowIndex);
        this.selectedRowIndex = ms.MessageId;
        console.log('After: ' + this.selectedRowIndex);
        //Fill form with data from selected message, in case user wants to forward, or edit and send again..
        this.service.formData.SenderName = ms.SenderName;
        this.service.formData.RecipientName = ms.RecipientName;
        this.service.formData.MessageBody = ms.MessageBody;
    };
    MessageDetailListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-message-detail-list',
            templateUrl: './message-detail-list.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [MessageDetailService])
    ], MessageDetailListComponent);
    return MessageDetailListComponent;
}());
export { MessageDetailListComponent };
//# sourceMappingURL=message-detail-list.component.js.map