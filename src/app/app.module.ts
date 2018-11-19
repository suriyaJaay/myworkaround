import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { FileDownloadService } from './file-download.service'
import { MockDataService } from './mock-data.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfExpComponent } from './prof-exp/prof-exp.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';
import { Http, ResponseContentType } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { MyCustomStyleDirective } from './my-custom-style.directive';

/*window["$"] = $;
window["jQuery"] = $;*/

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProfExpComponent,
    SkillsComponent,
    PageNotFoundComponent,
    MyCustomStyleDirective,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  /*MatInputModule,
    MatFormFieldModule,
    MatCardModule,*/
  providers: [MessageService,MockDataService,FileDownloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
