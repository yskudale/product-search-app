import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ProductSearchComponent } from './app/product-search/product-search.component';
import { ProductDetailComponent } from './app/product-detail/product-detail.component'; 

// Define your routes
const routes: Routes = [
  { path: '', component: ProductSearchComponent },
  { path: 'product/:id', component: ProductDetailComponent } // Add a route for product details
];

// Bootstrap the application with both appConfig and the router
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ...appConfig.providers // Spread the existing providers from appConfig
  ]
}).catch((err) => console.error(err));
