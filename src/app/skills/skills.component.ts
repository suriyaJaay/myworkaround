import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

private localImg:any = [];
  constructor() { }

  ngOnInit() {
    this.localImg = [     
    /* {id:0,name:"ng2",url:'./assets/img/ng2.png'},
     {id:1,name:"ng4",url:'./assets/img/ng4.png'},
     {id:2,name:"ng5",url:'./assets/img/ng5.png'},
     {id:3,name:"js",url:'assets/img/ng2.png'},
     {id:4,name:"ts",url:'assets/img/ng2.png'},
     {id:5,name:"bs",url:'assets/img/ng2.png'},
     {id:6,name:"git",url:'assets/img/ng2.png'},
     {id:7,name:"ji",url:'assets/img/ng2.png'},
     {id:8,name:"node",url:'assets/img/ng2.png'},*/
      ]
      console.log("image", this.localImg);

      
  }
 
}
