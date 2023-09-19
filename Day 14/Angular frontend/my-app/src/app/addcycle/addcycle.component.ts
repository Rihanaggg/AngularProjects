import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cycle } from '../cycle';
import { CycleserviceService } from '../cycleservice.service';

@Component({
  selector: 'app-addcycle',
  templateUrl: './addcycle.component.html',
  styleUrls: ['./addcycle.component.css']
})
export class AddcycleComponent {

   cycle : Cycle;

   constructor(
    private route: ActivatedRoute,
      private router: Router,
        private cycleService: CycleserviceService) {
          this.cycle = new Cycle();
  }

  onSubmit() {
    //console.log(this.cycle);
    this.cycleService.save(this.cycle).subscribe(result => this.gotoCycleList());
  }

  gotoCycleList() {
    this.router.navigate(['/cycle']);
  }
}



