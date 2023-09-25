import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { VendingMachineService } from '../vending-machine.service';
import { Section } from '../models/section.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  section: Section[] | null = null;
  selectedSectionId :Number=0;
  productId: number = 0;


  constructor(private vendingMachineService: VendingMachineService,private router: Router) {
    this.section = this.vendingMachineService.getAvailableSections();
  }

  onButtonClick() {
    const productId = this.productId;
    this.router.navigate(['/sectionlist',productId]);
  }

  addToCart(product: Product): void {
    this.vendingMachineService.addToCart(product);
  }

  removeFromCart(product: Product): void {
    this.vendingMachineService.removeFromCart(product);
  }

  getSelectedProducts(): Product[] {
    return this.vendingMachineService.getSelectedProducts();
  }

  generateBill(): number {
    return this.vendingMachineService.generateBill();
  }
}
