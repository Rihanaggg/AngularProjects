import { Component } from '@angular/core';
import { Section } from '../models/section.model';
import { VendingMachineService } from '../vending-machine.service';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent {
  //vendingMachineService: any;
  productId: any;
 // selectedSection: any;
  selectedSection: Section | null = null;
  selectedProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private vendingMachineService: VendingMachineService) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    //console.log(this.productId);
    this.selectedSection = this.vendingMachineService.getSectionByProductId(this.productId);
  }
  addToCart(product: Product): void {
    this.selectedProducts.push(product);
  }

  // addToCart(product: Product): void {
  //   this.vendingMachineService.addToCart(product);
  // }

  removeFromCart(product: Product): void {
    this.vendingMachineService.removeFromCart(product);
  }
  calculateTotal(products: Product[]): number {
    let total = 0;
    for (const product of products) {
      total += product.price;
    }
    return total;
  }

}
