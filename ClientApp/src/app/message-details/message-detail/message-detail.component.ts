import { Component, OnInit } from '@angular/core';
import { MessageDetailService } from 'src/app/shared/message-detail.service';
import { Message } from 'src/app/shared/message-detail.model';
import { User } from 'src/app/shared/user-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styles: []
})
export class MessageDetailComponent implements OnInit {
  users: User[];
  selectedRowIndex: number;
  constructor(private service: MessageDetailService) {

    this.service.GetAllUsers().subscribe(data => this.users = data,
      error => console.log(error),
      () => console.log('Get all complete'));

  }

  onChange_recepient(e) {
    this.service.formData.RecipientName = e;
    console.log('Selected recepient is: ' + this.service.formData.RecipientName);
  }


  onChange_sender(e) {
    this.service.formData.SenderName = e;
    console.log('Selected sender is: '+this.service.formData.SenderName);
  }

  onReset() {
   this.resetForm();
   this.service.changeSelectedrow(-1);
    

  }

  ngOnInit() {
    this.resetForm();
    this.service.currentMessage.subscribe(selectedRowIndex => this.selectedRowIndex = selectedRowIndex);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      MessageId: 0,
      MessageBody: '',
      SenderName: '',
      RecipientName: '',
      CreationDate: ''
    }
  }

  onSubmit(form: NgForm) {
    if (!(this.service.formData.SenderName == '') && !(this.service.formData.RecipientName == '')) {
    var num: number = 0
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
  }



  insertRecord(form: NgForm) {
    this.service.postMessage().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        

      },

      err => {
        debugger;
        console.log(err);

      }

    )

  }

}
