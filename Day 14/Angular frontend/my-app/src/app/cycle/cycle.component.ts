import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cycle } from '../cycle';
import { CycleserviceService } from '../cycleservice.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent {
  newdata:any;

  constructor(private _service:CycleserviceService, private http: HttpClient){}

  ngOnInit(){
    this._service.getData().subscribe(res=>{this.newdata = res;})
  }
  getBorrowStatus(cycle: Cycle){

    return this.http.post(`http://localhost:8080/api/borrow/${cycle.id}`,cycle).subscribe();
  }

  getReturnStatus(id:number){

    return this.http.post(`http://localhost:8080/api/return/${id}`,{}).subscribe();
  }
}
