import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MessageDetailComponent } from './message-details/message-detail/message-detail.component';
import { MessageDetailListComponent } from './message-details/message-detail-list/message-detail-list.component';
import { MessageDetailService } from './shared/message-detail.service';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule, MatSortModule, MatPaginatorModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                MessageDetailsComponent,
                MessageDetailComponent,
                MessageDetailListComponent,
            ],
            imports: [
                BrowserModule,
                HttpModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                MatInputModule,
                MatPaginatorModule,
                MatProgressSpinnerModule,
                MatSortModule,
                MatTableModule,
                MatFormFieldModule,
            ],
            providers: [MessageDetailService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map