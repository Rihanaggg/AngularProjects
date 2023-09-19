import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CycleserviceService } from './cycleservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  header = 'CycleShop'
  newdata:any;

  constructor(private _service:CycleserviceService, private http: HttpClient){}

  ngOnInit(){
    this._service.getData().subscribe(res=>{this.newdata = res;})
  }

}
