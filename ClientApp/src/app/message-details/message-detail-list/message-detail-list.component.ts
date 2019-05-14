import { Component, OnInit } from '@angular/core';
import { MessageDetailService } from 'src/app/shared/message-detail.service';
import { Message } from 'src/app/shared/message-detail.model';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-detail-list',
  templateUrl: './message-detail-list.component.html',
  styles: []
})
export class MessageDetailListComponent implements OnInit {

  selectedRowIndex: number;

  senderFilter = new FormControl('');
  messageFilter = new FormControl('');
  recipientFilter = new FormControl('');
  dateFilter = new FormControl('');
  filterValues = { "MessageBody": "", "SenderName": "", "RecipientName": "", "CreationDate": "" };
  public displayedColumns = ['SenderName', 'MessageBody', 'RecipientName', 'CreationDate'];
 

  constructor(private service: MessageDetailService) {
    this.service.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {
    this.service.refreshList();
    this.service.currentMessage.subscribe(selectedRowIndex => this.selectedRowIndex = selectedRowIndex);

    this.senderFilter.valueChanges
      .subscribe(
        SenderName => {
          this.filterValues.SenderName = SenderName;
          this.service.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.messageFilter.valueChanges
      .subscribe(
        MessageBody => {
          this.filterValues.MessageBody = MessageBody;
          this.service.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.recipientFilter.valueChanges
      .subscribe(
        RecipientName => {
          this.filterValues.RecipientName = RecipientName;
          this.service.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.dateFilter.valueChanges
      .subscribe(
        CreationDate => {
          this.filterValues.CreationDate = CreationDate;
          this.service.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.SenderName.toString().toLowerCase().indexOf(searchTerms.SenderName) !== -1
        && data.MessageBody.toString().toLowerCase().indexOf(searchTerms.MessageBody) !== -1
        && data.RecipientName.toString().toLowerCase().indexOf(searchTerms.RecipientName) !== -1
        && data.CreationDate.toString().toLowerCase().indexOf(searchTerms.CreationDate) !== -1;
    }
    return filterFunction;
  }

  onSelectRow(event: any, ms: Message) {

    console.log('Before: '+this.selectedRowIndex);
    this.selectedRowIndex = ms.MessageId;
    console.log('After: ' + this.selectedRowIndex);

    //Fill form with data from selected message, in case user wants to forward, or edit and send again..

    this.service.formData.SenderName = ms.SenderName;
    this.service.formData.RecipientName = ms.RecipientName;
    this.service.formData.MessageBody = ms.MessageBody;
    
  }

}
