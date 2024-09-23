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
    { id: 4, name: 'Headphone', price: 150, description: 'High-quality wireless headphones.', imageUrl: 'assets/images/headphone.jpeg', imageTitle:'Headphone' },
    { id: 5, name: 'Olive Green', price: 250, description: 'Stylish Olive Green apparel.', imageUrl: 'assets/images/olive-green.webp', imageTitle:'Olive' },
    { id: 6, name: 'Shoe', price: 300, description: 'Comfortable running shoes.', imageUrl: 'assets/images/shoe.jpg', imageTitle:'Shoe' },
    { id: 7, name: 'Watch', price: 150, description: 'Elegant wristwatch for men.', imageUrl: 'assets/images/watch.jpeg', imageTitle:'Watch' },
    { id: 8, name: 'Backpack', price: 120, description: 'Durable travel backpack.', imageUrl: 'assets/images/backpack.jpg', imageTitle:'Backpack' },
    { id: 9, name: 'Sunglasses', price: 180, description: 'Stylish sunglasses with UV protection.', imageUrl: 'assets/images/sunglasses.jpg', imageTitle:'Sunglasses' },
    { id: 10, name: 'Coffee Mug', price: 50, description: 'Ceramic coffee mug.', imageUrl: 'assets/images/coffee-mug.jpg', imageTitle:'Coffee Mug' },
    { id: 11, name: 'Laptop', price: 700, description: 'High-performance laptop for professionals.', imageUrl: 'assets/images/laptop.jpg', imageTitle:'Laptop' },
    { id: 12, name: 'Smartphone', price: 600, description: 'Latest model smartphone.', imageUrl: 'assets/images/smartphone.jpg', imageTitle:'Smartphone' },
    { id: 13, name: 'Tablet', price: 400, description: 'Portable tablet for reading and browsing.', imageUrl: 'assets/images/tablet.jpg', imageTitle:'Tablet' },
    { id: 14, name: 'Smartwatch', price: 250, description: 'Smartwatch with health tracking features.', imageUrl: 'assets/images/smartwatch.jpg', imageTitle:'Smartwatch' },
    { id: 15, name: 'Bluetooth Speaker', price: 100, description: 'Portable Bluetooth speaker with great sound quality.', imageUrl: 'assets/images/bluetooth-speaker.jpg', imageTitle:'Bluetooth Speaker' },
    { id: 16, name: 'Gaming Console', price: 500, description: 'Next-gen gaming console for hardcore gamers.', imageUrl: 'assets/images/gaming-console.jpg', imageTitle:'Gaming Console' },
    { id: 17, name: 'Keyboard', price: 70, description: 'Mechanical keyboard with backlight.', imageUrl: 'assets/images/keyboard.jpg', imageTitle:'Keyboard' },
    { id: 18, name: 'Mouse', price: 30, description: 'Wireless mouse with ergonomic design.', imageUrl: 'assets/images/mouse.jpg', imageTitle:'Mouse' },
    { id: 19, name: 'Monitor', price: 250, description: 'Ultra HD monitor for clear visuals.', imageUrl: 'assets/images/monitor.jpg', imageTitle:'Monitor' },
    { id: 20, name: 'Fitness Tracker', price: 80, description: 'Fitness tracker with heart rate monitor.', imageUrl: 'assets/images/fitness-tracker.jpg', imageTitle:'Fitness Tracker' },
    { id: 21, name: 'Drone', price: 350, description: 'Camera drone for aerial photography.', imageUrl: 'assets/images/drone.jpg', imageTitle:'Drone' },
    { id: 22, name: 'Electric Kettle', price: 40, description: 'Quick-boiling electric kettle.', imageUrl: 'assets/images/electric-kettle.jpg', imageTitle:'Electric Kettle' },
    { id: 23, name: 'Blender', price: 60, description: 'High-speed blender for smoothies.', imageUrl: 'assets/images/blender.jpg', imageTitle:'Blender' },
    { id: 24, name: 'Air Fryer', price: 100, description: 'Healthy air fryer for crispy snacks.', imageUrl: 'assets/images/air-fryer.jpg', imageTitle:'Air Fryer' },
    { id: 25, name: 'Vacuum Cleaner', price: 150, description: 'Powerful vacuum cleaner for deep cleaning.', imageUrl: 'assets/images/vacuum-cleaner.jpg', imageTitle:'Vacuum Cleaner' },
    { id: 26, name: 'Hair Dryer', price: 50, description: 'Professional hair dryer.', imageUrl: 'assets/images/hair-dryer.jpg', imageTitle:'Hair Dryer' },
    { id: 27, name: 'Water Bottle', price: 25, description: 'Reusable stainless steel water bottle.', imageUrl: 'assets/images/water-bottle.jpg', imageTitle:'Water Bottle' },
    { id: 28, name: 'Yoga Mat', price: 30, description: 'Non-slip yoga mat for home workouts.', imageUrl: 'assets/images/yoga-mat.jpg', imageTitle:'Yoga Mat' },
    { id: 29, name: 'Dumbbells', price: 80, description: 'Adjustable dumbbells for strength training.', imageUrl: 'assets/images/dumbbells.jpg', imageTitle:'Dumbbells' },
    { id: 30, name: 'Resistance Bands', price: 20, description: 'Set of resistance bands for workout.', imageUrl: 'assets/images/resistance-bands.jpg', imageTitle:'Resistance Bands' },
    { id: 31, name: 'Camping Tent', price: 120, description: 'Lightweight camping tent for 2 people.', imageUrl: 'assets/images/camping-tent.jpg', imageTitle:'Camping Tent' },
    { id: 32, name: 'Sleeping Bag', price: 70, description: 'Comfortable sleeping bag for outdoor camping.', imageUrl: 'assets/images/sleeping-bag.jpg', imageTitle:'Sleeping Bag' },
    { id: 33, name: 'Hiking Boots', price: 90, description: 'Durable hiking boots for tough terrain.', imageUrl: 'assets/images/hiking-boots.jpg', imageTitle:'Hiking Boots' },
    { id: 34, name: 'Binoculars', price: 100, description: 'Compact binoculars for bird watching.', imageUrl: 'assets/images/binoculars.jpg', imageTitle:'Binoculars' },
    { id: 35, name: 'Cycling Helmet', price: 60, description: 'Protective cycling helmet with adjustable fit.', imageUrl: 'assets/images/cycling-helmet.jpg', imageTitle:'Cycling Helmet' },
    { id: 36, name: 'Skateboard', price: 90, description: 'Beginner-friendly skateboard for tricks.', imageUrl: 'assets/images/skateboard.jpg', imageTitle:'Skateboard' },
    { id: 37, name: 'Electric Scooter', price: 400, description: 'Electric scooter for convenient city travel.', imageUrl: 'assets/images/electric-scooter.jpg', imageTitle:'Electric Scooter' },
    { id: 38, name: 'Road Bike', price: 500, description: 'Lightweight road bike for fast commutes.', imageUrl: 'assets/images/road-bike.jpg', imageTitle:'Road Bike' },
    { id: 39, name: 'Golf Club Set', price: 600, description: 'Complete set of golf clubs for beginners.', imageUrl: 'assets/images/golf-club.jpg', imageTitle:'Golf Club Set' },
    { id: 40, name: 'Basketball', price: 40, description: 'Official size basketball for outdoor use.', imageUrl: 'assets/images/basketball.jpg', imageTitle:'Basketball' },
    { id: 41, name: 'Football', price: 50, description: 'Premium leather football for matches.', imageUrl: 'assets/images/football.jpg', imageTitle:'Football' },
    { id: 42, name: 'Soccer Ball', price: 45, description: 'FIFA approved soccer ball.', imageUrl: 'assets/images/soccer-ball.jpg', imageTitle:'Soccer Ball' },
    { id: 43, name: 'Baseball Glove', price: 70, description: 'Professional-grade baseball glove.', imageUrl: 'assets/images/baseball-glove.jpg', imageTitle:'Baseball Glove' },
    { id: 44, name: 'Tennis Racket', price: 150, description: 'Lightweight tennis racket for beginners.', imageUrl: 'assets/images/tennis-racket.jpg', imageTitle:'Tennis Racket' },
    { id: 45, name: 'Table Tennis Set', price: 40, description: 'Complete table tennis set with paddles.', imageUrl: 'assets/images/table-tennis-set.jpg', imageTitle:'Table Tennis Set' },
    { id: 46, name: 'Chess Board', price: 30, description: 'Classic wooden chess board.', imageUrl: 'assets/images/chess-board.jpg', imageTitle:'Chess Board' },
    { id: 47, name: 'Puzzle Set', price: 25, description: '1000-piece puzzle for all ages.', imageUrl: 'assets/images/puzzle-set.jpg', imageTitle:'Puzzle Set' },
    { id: 48, name: 'Board Game', price: 40, description: 'Fun board game for family and friends.', imageUrl: 'assets/images/board-game.jpg', imageTitle:'Board Game' },
    { id: 49, name: 'Drone Camera', price: 500, description: 'High-resolution camera drone for aerial shots.', imageUrl: 'assets/images/drone-camera.jpg', imageTitle:'Drone Camera' },
    { id: 50, name: 'VR Headset', price: 250, description: 'Virtual reality headset for immersive gaming.', imageUrl: 'assets/images/vr-headset.jpg', imageTitle:'VR Headset' },

    // Continue for 50 more products following the same pattern...
];

private wishlist: Product[] = [];




  constructor() { }

  // Method to get the products
  // Method to get products with pagination
  getProducts(page: number, pageSize: number): Product[] {
    const startIndex = (page - 1) * pageSize;
    return this.products.slice(startIndex, startIndex + pageSize);
  }

  // Method to get the total number of products
  getTotalProductsCount(): number {
    return this.products.length; // Total number of products
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id); // Returns undefined if not found
  }
}
