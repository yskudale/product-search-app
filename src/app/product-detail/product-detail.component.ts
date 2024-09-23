import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;  // The product to display

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Get the 'id' from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Convert the 'id' to a number and fetch product details
      this.product = this.productService.getProductById(+id);
    }
  }
  goBack():void{
    this.router.navigate(['/'])
  }
}