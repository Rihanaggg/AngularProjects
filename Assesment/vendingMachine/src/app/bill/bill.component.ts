import { Component } from '@angular/core';
import { VendingMachineService } from '../vending-machine.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  vendingMachineService: any;
  //constructor(vendingMachineService: VendingMachineService){}
  generateBill(): number {
    return this.vendingMachineService.generateBill();
  }
}
