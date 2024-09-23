import { Component } from '@angular/core';
import { ProductSearchComponent } from './product-search/product-search.component';  
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductSearchComponent],  // Combine imports here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  // Corrected property name from styleUrl to styleUrls
})
export class AppComponent {
  title = 'Product Details';
}
