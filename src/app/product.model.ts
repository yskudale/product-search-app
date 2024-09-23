export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;  // Add this line
    imageTitle:string;
    isInWishlist?: boolean; // Optional property for wishlist status
  }
  