import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vendingMachine';

  productId: number = 0;

  constructor(private router: Router) { }

  onButtonClick() {
    const productId = this.productId;
    this.router.navigate(['/sectionlist',productId]);
  }
}
