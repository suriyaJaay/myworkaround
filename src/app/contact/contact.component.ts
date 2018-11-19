import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { MessageService } from '../message.service';
import {Observable} from 'rxjs'; 
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	contactFormData : FormGroup;
  constructor(private _http: HttpClient, private msgService : MessageService, private contactFRM : FormBuilder) { 
  	this.contactFormData = this.contactFRM.group({
  		senderName : '',
  		senderEmail:'',
  		senderSubject:'',
  		senderMsg:'',
  	})

  }

 pushContactFormData(){
 	this.msgService.triggerMail(JSON.stringify(this.contactFormData.value))
 	this.contactFormData.reset()
 }
 /*fileDownload() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/pdf');
     //headers = headers.set('Accept', 'application/pdf');
     //this._http.get('http://localhost:4300/downloadPDF',  { headers: headers,responseType:'blob' })
    this._http.get('http://localhost:4300/downloadPDF',  { headers: headers })
      .toPromise()
      .then(response => this.saveItToClient(response));
  }
	private saveItToClient(response: any) {
    const contentDispositionHeader: string = response.headers.get('Content-Disposition');
    const parts: string[] = contentDispositionHeader.split(';');
    const filename = parts[1].split('=')[1];
    const blob = new Blob([response._body], { type: 'application/pdf' });
    saveAs(blob, filename);
  }*/
  ngOnInit() {
  }

}
