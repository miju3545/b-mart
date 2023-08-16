export type Product = {
  id: number;
  title: string;
  price: number;
  discountPrice?: number;
  category?: string;
  description?: string;
  imageUrl: string;
};
