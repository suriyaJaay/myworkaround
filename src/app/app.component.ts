import { Component, OnInit } from '@angular/core';
/*import $ from 'jquery'
declare var $: $*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   isCollapsed: boolean = true;
  ngOnInit() {
    $('.navbar-nav>li>a').on('click', function () {
      (<any>$('.navbar-collapse')).collapse('hide');
    });
  }
}
