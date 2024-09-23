import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Alexazabach', price: 100, description: 'Description of Product Alexazabach', imageUrl: 'assets/images/alexazabach.jpg', imageTitle:'Alexazabach' },
    { id: 2, name: 'Camra', price: 200, description: 'Description of Product Camra', imageUrl: 'assets/images/camera.jpg', imageTitle:'Camra' },
    { id: 3, name: 'Handwash', price: 300, description: 'Description of Product Handwash', imageUrl: 'assets/images/handwash.avif', imageTitle:'Handwash' },
    { id: 3, name: 'Headphone', price: 300, description: 'Description of Product Headphone', imageUrl: 'assets/images/headphone.jpeg', imageTitle:'Headphone' },
    { id: 3, name: 'Olive Green', price: 300, description: 'Description of Product Olive Green', imageUrl: 'assets/images/olive-green.webp', imageTitle:'Olive' },
    { id: 3, name: 'Shoe', price: 300, description: 'Description of Product Shoe', imageUrl: 'assets/images/shoe.jpg', imageTitle:'Shoe' },
    { id: 4, name: 'Watch', price: 150, description: 'High-quality Watch', imageUrl: 'assets/images/watch.jpeg', imageTitle:'Watch' },

    // Add more sample products as needed
  ];

  constructor() { }

  // Method to get the products
  getProducts(): Product[] {
    return this.products;
  }
}
