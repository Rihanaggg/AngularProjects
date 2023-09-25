import { Injectable } from '@angular/core';
import { Section } from './models/section.model';
import { Product } from './models/product.model';


@Injectable({
  providedIn: 'root'
})
export class VendingMachineService {
  private sections: Section[] = [
    {
      id: 1,
      name: 'Snacks',
      products: [
        { id: 1, name: 'Chips', price: 1.5, quantity: 10 },
        { id: 2, name: 'Candy', price: 1, quantity: 5 },
        { id: 3, name: 'Kurkure', price: 5, quantity: 6 },
        { id: 4, name: 'Cadburry', price: 4, quantity: 5 }

      ]
    },
    {
      id: 2,
      name: 'Drinks',
      products: [
        { id: 5, name: 'Soda', price: 2, quantity: 8 },
        { id: 6, name: 'Water', price: 5, quantity: 10 },
        { id: 7, name: 'Water', price: 6, quantity: 20 },
        { id: 8, name: 'Water', price: 3, quantity: 15 }

      ]
    }

  ];

  private selectedSection: Section | null = null;
  private selectedProducts: Product[] = [];

  selectSection(sectionId: number): void {
    this.selectedSection = this.sections.find(section => section.id === sectionId) || null;
  }

  addToCart(product: Product): void {
    if (this.selectedSection) {
      const selectedProduct = this.selectedSection.products.find(p => p.id === product.id);

      if (selectedProduct && selectedProduct.quantity > 0) {
        this.selectedProducts.push(selectedProduct);
        selectedProduct.quantity--;
      }
    }
  }

  removeFromCart(product: Product): void {
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
      const productInSection = this.selectedSection?.products.find(p => p.id === product.id);
      if (productInSection) {
        productInSection.quantity++;
      }
    }
  }

  generateBill(): number {
    let total = 0;
    for (const product of this.selectedProducts) {
      total += product.price;
    }
    return total;
  }

  getAvailableSections(): Section[] {
    return this.sections.filter(section => section.products.some(product => product.quantity > 0));
  }

  getSelectedSection(): Section | null {
    return this.selectedSection;
  }

  getSelectedProducts(): Product[] {
    return this.selectedProducts;
  }
  getSectionByProductId(productId: string): Section | null {
    for (const section of this.sections) {
      const product = section.products.find(product => product.id === +productId);
      if (product) {
        return section;
      }
    }
    return null;
  }
}
