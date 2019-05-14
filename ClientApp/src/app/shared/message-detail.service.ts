import { Injectable } from '@angular/core';
import { Message } from './message-detail.model';
import { HttpClient } from "@angular/common/http";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable, Subject } from 'rxjs' 
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class MessageDetailService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  public dataSource = new MatTableDataSource<Message>();

  private actionUrl: string;
  formData: Message;
  readonly rootURL = 'http://localhost:5000/api';
  list: Message[];

  constructor(private http: HttpClient, private _http: Http) {
    this.actionUrl = 'http://localhost:5000/api/users';

  }

  changeSelectedrow(row: number) {
    this.messageSource.next(row);
  }

  public GetAllUsers = (): Observable<any> => {
    return this._http.get(this.actionUrl)
      .map((response: Response) => <any>response.json());
  }

  postMessage() {
    var date = new Date();
    this.formData.CreationDate = date.toDateString();
    return this.http.post(this.rootURL + '/messages', this.formData);
  }

  putMessage() {
    return this.http.put(this.rootURL + '/messages/' + this.formData.MessageId, this.formData);
  }

  deleteMessage(id) {
    return this.http.delete(this.rootURL + '/messages/' + id);
  }


  refreshList() {
    this.http.get(this.rootURL + '/messages')
      .toPromise()
      .then(res => this.dataSource.data = res as Message[]);
  }

}
