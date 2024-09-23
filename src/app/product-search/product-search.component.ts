import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  products: Product[] = [];  // Array to hold product data
  filteredProducts: Product[] = [];  // Array to hold filtered products
  searchTerm: string = '';  // Search term for filtering
  currentPage: number = 1;   // Current page
  pageSize: number = 10;     // Number of products per page
  totalProducts: number = 0;  // Total number of products

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();  // Load products on component initialization
  }

  loadProducts(): void {
    this.products = this.productService.getProducts(this.currentPage, this.pageSize);
    this.totalProducts = this.productService.getTotalProductsCount();
    this.filteredProducts = [...this.products];  // Use spread operator for shallow copy
  }

  viewProduct(product: any): void {
    this.router.navigate(['/product', product.id]);  
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadProducts();  // Load products for the new page
  }

  get totalPages(): number {
    return Math.ceil(this.totalProducts / this.pageSize);  // Calculate total pages
  }

  

  // Search functionality
  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement; // Type assertion
    this.searchTerm = input.value.toLowerCase(); // Get the input value
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm) || // Filter by name
      product.description.toLowerCase().includes(this.searchTerm) // Filter by description
    );
  }
  
}
