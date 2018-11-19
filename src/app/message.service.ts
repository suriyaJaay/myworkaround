import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
	httpHeader = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		})
	};
  constructor(private _http: HttpClient) { }

  triggerMail(formData){
  	this._http.post('http://localhost:4300/dropMail', formData, this.httpHeader).subscribe((data)=>{
  		console.log("data", data)
  	})
  }
	/*sendFileToView(){
		this._http.get('http://localhost:4300/downloadPDF', this.httpHeader).subscribe((data)=>{
			console.log("data", data);
		})
	}*/
}
