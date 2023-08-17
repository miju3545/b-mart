export type Product = {
  id: number;
  title: string;
  price: number;
  discountPrice?: number;
  categoryId?: number;
  imageUrl: string;
};
