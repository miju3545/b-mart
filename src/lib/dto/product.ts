export type Product = {
  id: number;
  title: string;
  price: number;
  discountPrice: number;
  discountPercent?: number;
  categoryId?: number;
  imageUrl: string;
};
