import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Disciplina';

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
