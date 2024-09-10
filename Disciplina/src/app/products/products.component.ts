import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products = [
    {
      name: 'coca',
      desc: 'bebida carbonatada',
      price: '20'
    },
    {
      name: 'doritos',
      desc: 'frituras de queso',
      price: '16'
    },
    {
      name: 'emperador',
      desc: 'galletas de sabor combinado',
      price: '18'
    },
  ]
}
