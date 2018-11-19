import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';
@Component({
  selector: 'app-prof-exp',
  templateUrl: './prof-exp.component.html',
  styleUrls: ['./prof-exp.component.css']
})
export class ProfExpComponent implements OnInit {

  constructor(private localDataService:MockDataService) { }
  private exp =[];
  ngOnInit() {
    this.localDataService.loadMyInfo().subscribe(d =>{
      console.log("Data", d);
      this.exp.push(d)
    })
  }

}
