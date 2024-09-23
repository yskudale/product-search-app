import { Component,  OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})

export class ProductSearchComponent implements OnInit {
  products: Product[] = [];  // Array to hold product data

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();  // Fetch products
  }
}