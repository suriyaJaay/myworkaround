import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private _url:string = "assets/mockData/jaay.json";
  constructor(private http:HttpClient) { }

  loadMyInfo(){    
     return this.http.get(this._url);
    }
}
