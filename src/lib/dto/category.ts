import { Product } from "./product";

export type Category = {
  id: number;
  title: string;
  subCategories: Pick<Category, "id" | "title">[] | [];
  products: Product[];
};

export type MainCategory = Pick<Category, "id" | "title"> & {
  imageUrl: string;
};

export type SubCategory = Pick<Category, "id" | "title">;
